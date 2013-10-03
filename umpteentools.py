import cgi
import datetime
import urllib
import webapp2
import jinja2
import os
import json
import logging
import urlparse
from decimal import Decimal
from google.appengine.api import urlfetch

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainPage(webapp2.RequestHandler):
	def get(self):
		self.response.headers.add_header("Access-Control-Allow-Origin", "*")
		url = self.request.get('url')
		if not url:
			self.response.out.write("An error occurred while retrieving the headers")
			return

		parts = urlparse.urlsplit(url)
		if not parts.scheme:
			url = 'http://' + url

		result = urlfetch.fetch(url)
		if result.status_code == 200:
			for e in result.headers:
				self.response.out.write("<p><strong>" + e + ":</strong>  <span>" + result.headers[e] + "</span></p>")
		else:
			self.response.out.write("An error occurred while retrieving the headers")

class GoogleHeadersPage(webapp2.RequestHandler):
	def get(self):
		self.response.headers.add_header("Access-Control-Allow-Origin", "*")
		self.response.headers['Content-Type'] = 'application/json'

		try:
			my_response = {'ip': self.request.remote_addr, 'city': self.request.headers['X-Appengine-City'], 'state': self.request.headers['X-Appengine-Region'], 'country': self.request.headers['X-Appengine-Country'], 'coordinates': self.request.headers['X-Appengine-Citylatlong']}
			self.response.out.write(json.dumps(my_response))
		except:
			self.response.out.write(json.dumps({'city': 'Naperville', 'state': 'IL'}))

app = webapp2.WSGIApplication([('/headers', MainPage), ('/me', GoogleHeadersPage)],
                              debug=True)