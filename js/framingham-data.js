+function (context) { "use strict";

    context.FraminghamData = {};

    FraminghamData.female = {
        age: [
            {
                min: 20,
                max: 34,
                points: -7
            },
            {
                min: 35,
                max: 39,
                points: -3
            },
            {
                min: 40,
                max: 44,
                points: 0
            },
            {
                min: 45,
                max: 49,
                points: 3
            },
            {
                min: 50,
                max: 54,
                points: 6
            },
            {
                min: 55,
                max: 59,
                points: 8
            },
            {
                min: 60,
                max: 64,
                points: 10
            },
            {
                min: 65,
                max: 69,
                points: 12
            },
            {
                min: 70,
                max: 74,
                points: 14
            },
            {
                min: 75,
                points: 16
            }
        ],
        cholesterol: [
            {
                min: 20,
                max: 39,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 4
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 8
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 11
                    },
                    {
                        min: 280,
                        points: 13
                    }
                ]
            },
            {
                min: 40,
                max: 49,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 3
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 6
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 8
                    },
                    {
                        min: 280,
                        points: 10
                    }
                ]
            },
            {
                min: 50,
                max: 59,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 2
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 4
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 5
                    },
                    {
                        min: 280,
                        points: 7
                    }
                ]
            },
            {
                min: 60,
                max: 69,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 1
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 2
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 3
                    },
                    {
                        min: 280,
                        points: 4
                    }
                ]
            },
            {
                min: 70,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 1
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 1
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 2
                    },
                    {
                        min: 280,
                        points: 3
                    }
                ]
            }
        ],
        smoker: [
            {
                min: 20,
                max: 39,
                points: 9
            },
            {
                min: 40,
                max: 49,
                points: 7
            },
            {
                min: 50,
                max: 59,
                points: 4
            },
            {
                min: 60,
                max: 69,
                points: 2
            },
            {
                min: 70,
                points: 1
            }
        ],
        hdl: [
            {
                min: 60,
                points: -1
            },
            {
                min: 50,
                max: 59,
                points: 0
            },
            {
                min: 40,
                max: 49,
                points: 1
            },
            {
                max: 40,
                points: 2
            }
        ],
        systolic: [
            {
                max: 119,
                points: 0
            },
            {
                min: 120,
                max: 129,
                points: 1
            },
            {
                min: 130,
                max: 139,
                points: 2
            },
            {
                min: 140,
                max: 159,
                points: 3
            },
            {
                min: 160,
                points: 4
            }
        ],
        result: [
            {
                max: 8,
                risk: '<1%'
            },
            {
                min: 9,
                max: 12,
                risk: '1%'
            },
            {
                min: 13,
                max: 14,
                risk: '2%'
            },
            {
                min: 15,
                max: 15,
                risk: '3%'
            },
            {
                min: 16,
                max: 16,
                risk: '4%'
            },
            {
                min: 17,
                max: 17,
                risk: '5%'
            },
            {
                min: 18,
                max: 18,
                risk: '6%'
            },
            {
                min: 19,
                max: 19,
                risk: '8%'
            },
            {
                min: 20,
                max: 20,
                risk: '11%'
            },
            {
                min: 21,
                max: 21,
                risk: '14%'
            },
            {
                min: 22,
                max: 22,
                risk: '17%'
            },
            {
                min: 23,
                max: 23,
                risk: '22%'
            },
            {
                min: 24,
                max: 24,
                risk: '27%'
            },
            {
                min: 25,
                risk: 'Over 30%'
            }
        ]
    };


    FraminghamData.male = {
        age: [
            {
                min: 20,
                max: 34,
                points: -9
            },
            {
                min: 35,
                max: 39,
                points: -4
            },
            {
                min: 40,
                max: 44,
                points: 0
            },
            {
                min: 45,
                max: 49,
                points: 3
            },
            {
                min: 50,
                max: 54,
                points: 6
            },
            {
                min: 55,
                max: 59,
                points: 8
            },
            {
                min: 60,
                max: 64,
                points: 10
            },
            {
                min: 65,
                max: 69,
                points: 11
            },
            {
                min: 70,
                max: 74,
                points: 12
            },
            {
                min: 75,
                points: 13
            }
        ],
        cholesterol: [
            {
                min: 20,
                max: 39,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 4
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 7
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 9
                    },
                    {
                        min: 280,
                        points: 11
                    }
                ]
            },
            {
                min: 40,
                max: 49,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 3
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 5
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 6
                    },
                    {
                        min: 280,
                        points: 8
                    }
                ]
            },
            {
                min: 50,
                max: 59,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 2
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 3
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 4
                    },
                    {
                        min: 280,
                        points: 5
                    }
                ]
            },
            {
                min: 60,
                max: 69,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 1
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 1
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 2
                    },
                    {
                        min: 280,
                        points: 3
                    }
                ]
            },
            {
                min: 70,
                data: [
                    {
                        max: 159,
                        points: 0
                    },
                    {
                        min: 160,
                        max: 199,
                        points: 0
                    },
                    {
                        min: 200,
                        max: 239,
                        points: 0
                    },
                    {
                        min: 240,
                        max: 279,
                        points: 1
                    },
                    {
                        min: 280,
                        points: 1
                    }
                ]
            }
        ],
        smoker: [
            {
                min: 20,
                max: 39,
                points: 8
            },
            {
                min: 40,
                max: 49,
                points: 5
            },
            {
                min: 50,
                max: 59,
                points: 3
            },
            {
                min: 60,
                max: 69,
                points: 1
            },
            {
                min: 70,
                points: 1
            }
        ],
        hdl: [
            {
                min: 60,
                points: -1
            },
            {
                min: 50,
                max: 59,
                points: 0
            },
            {
                min: 40,
                max: 49,
                points: 1
            },
            {
                max: 40,
                points: 2
            }
        ],
        systolic: [
            {
                max: 119,
                points: 0
            },
            {
                min: 120,
                max: 129,
                points: 0
            },
            {
                min: 130,
                max: 139,
                points: 1
            },
            {
                min: 140,
                max: 159,
                points: 1
            },
            {
                min: 160,
                points: 2
            }
        ],
        result: [
            {
                max: 0,
                risk: '<1%'
            },
            {
                min: 1,
                max: 4,
                risk: '1%'
            },
            {
                min: 5,
                max: 6,
                risk: '2%'
            },
            {
                min: 7,
                max: 7,
                risk: '3%'
            },
            {
                min: 8,
                max: 8,
                risk: '4%'
            },
            {
                min: 9,
                max: 9,
                risk: '5%'
            },
            {
                min: 10,
                max: 10,
                risk: '6%'
            },
            {
                min: 11,
                max: 11,
                risk: '8%'
            },
            {
                min: 12,
                max: 12,
                risk: '10%'
            },
            {
                min: 13,
                max: 13,
                risk: '12%'
            },
            {
                min: 14,
                max: 14,
                risk: '16%'
            },
            {
                min: 15,
                max: 15,
                risk: '20%'
            },
            {
                min: 16,
                max: 16,
                risk: '25%'
            },
            {
                min: 17,
                risk: 'Over 30%'
            }
        ]
    };


}(window);