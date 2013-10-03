import cgi
import datetime
import urllib
import webapp2
import jinja2
import os
import json
import logging
from decimal import Decimal
from google.appengine.api import urlfetch

jinja_environment = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainPage(webapp2.RequestHandler):
	def get(self):
		self.response.headers.add_header("Access-Control-Allow-Origin", "*")
		url = self.request.get('url')
		result = urlfetch.fetch(url)
		if result.status_code == 200:
			for e in result.headers:
				self.response.out.write("<p><strong>" + e + ":</strong>  <span>" + result.headers[e] + "</span></p>")
		else:
			self.response.out.write("An error occurred while retrieving the headers")

app = webapp2.WSGIApplication([('/', MainPage)],
                              debug=True)