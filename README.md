## Backend

## How to run
- Install all the dependencies by running `npm install`, this will install all the dependencies in the `package.json`

To start the app run `npm run start` OR `npm run start:dev` [This will spin up the app with nodemon]

The App should running on `http://localhost:8080`

### Endpoint
*GET 'http:{{base_url}}/v1/pricing*

This returns all the plans.

```javascript
//Sample response
{
    "success": true,
    "message": "Pricing sucessfully fetched",
    "data": {
        "tiers": [
            {
                "starter": {
                    "price": "€3",
                    "description": "Good place to start",
                    "reporting": [
                        {
                            "detailed_reports": false,
                            "weekly_data_reports": true,
                            "create_your_own_reports": false
                        }
                    ],
                    "blog": [
                        {
                            "create_your_own_blog": true,
                            "upload_images": false
                        }
                    ],
                    "file_storgae": [
                        {
                            "upload_files": false,
                            "share_files_with_team": true,
                            "watch_videos": false
                        }
                    ],
                    "application_integration": [
                        {
                            "install_new_apps": false,
                            "install_custom_apps": true
                        }
                    ]
                },
                "advanced": {
                    "price": "€10",
                    "description": "For the startup with more needsGood place to start",
                    "reporting": [
                        {
                            "detailed_reports": true,
                            "weekly_data_reports": true,
                            "create_your_own_reports": true
                        }
                    ],
                    "blog": [
                        {
                            "create_your_own_blog": true,
                            "upload_images": true
                        }
                    ],
                    "file_storgae": [
                        {
                            "upload_files": true,
                            "share_files_with_team": true,
                            "watch_videos": false
                        }
                    ],
                    "application_integration": [
                        {
                            "install_new_apps": true,
                            "install_custom_apps": false
                        }
                    ]
                },
                "enterprise": {
                    "price": "€100",
                    "description": "for big companies with big dreams",
                    "reporting": [
                        {
                            "detailed_reports": true,
                            "weekly_data_reports": true,
                            "create_your_own_reports": true
                        }
                    ],
                    "blog": [
                        {
                            "create_your_own_blog": true,
                            "upload_images": true
                        }
                    ],
                    "file_storgae": [
                        {
                            "upload_files": false,
                            "share_files_with_team": true,
                            "watch_videos": false
                        }
                    ],
                    "application_integration": [
                        {
                            "install_new_apps": true,
                            "install_custom_apps": false
                        }
                    ]
                }
            }
        ]
    }
}
```

The tiers can be queried with  different plans e.g `starter`, `advanced`, `enterprise`

### *GET 'http:{{base_url}}/v1/pricing?plans=starter*

This returns all starter plan

```javascript
{
    "success": true,
    "message": "Pricing sucessfully fetched",
    "data": [
        {
            "starter": {
                "application_integration": [
                    {
                        "install_new_apps": false,
                        "install_custom_apps": true
                    }
                ],
                "blog": [
                    {
                        "create_your_own_blog": true,
                        "upload_images": false
                    }
                ],
                "description": "Good place to start",
                "file_storgae": [
                    {
                        "upload_files": false,
                        "share_files_with_team": true,
                        "watch_videos": false
                    }
                ],
                "price": "€3",
                "reporting": [
                    {
                        "detailed_reports": false,
                        "weekly_data_reports": true,
                        "create_your_own_reports": false
                    }
                ]
            }
        }
    ]
}
```


### *GET 'http:{{base_url}}/v1/pricing?plans=starter,advanced*

This returns `starter` and `advanced` plan

```javascript
{
    "success": true,
    "message": "Pricing sucessfully fetched",
    "data": [
        {
            "starter": {
                "application_integration": [
                    {
                        "install_new_apps": false,
                        "install_custom_apps": true
                    }
                ],
                "blog": [
                    {
                        "create_your_own_blog": true,
                        "upload_images": false
                    }
                ],
                "description": "Good place to start",
                "file_storgae": [
                    {
                        "upload_files": false,
                        "share_files_with_team": true,
                        "watch_videos": false
                    }
                ],
                "price": "€3",
                "reporting": [
                    {
                        "detailed_reports": false,
                        "weekly_data_reports": true,
                        "create_your_own_reports": false
                    }
                ]
            }
        },
        {
            "advanced": {
                "application_integration": [
                    {
                        "install_new_apps": true,
                        "install_custom_apps": false
                    }
                ],
                "blog": [
                    {
                        "create_your_own_blog": true,
                        "upload_images": true
                    }
                ],
                "description": "For the startup with more needsGood place to start",
                "file_storgae": [
                    {
                        "upload_files": true,
                        "share_files_with_team": true,
                        "watch_videos": false
                    }
                ],
                "price": "€10",
                "reporting": [
                    {
                        "detailed_reports": true,
                        "weekly_data_reports": true,
                        "create_your_own_reports": true
                    }
                ]
            }
        }
    ]
}
```

### Also, the response can be sorted by passing sort query params


*Sort only the plans and not the available options*

*GET 'http:{{base_url}}/v1/pricing?sort=true*

```javascript
"success": true,
    "message": "Pricing sucessfully fetched",
    "data": {
        "advanced": {
            "price": "€10",
            "description": "For the startup with more needsGood place to start",
            "reporting": [
                {
                    "detailed_reports": true,
                    "weekly_data_reports": true,
                    "create_your_own_reports": true
                }
            ],
            "blog": [
                {
                    "create_your_own_blog": true,
                    "upload_images": true
                }
            ],
            "file_storgae": [
                {
                    "upload_files": true,
                    "share_files_with_team": true,
                    "watch_videos": false
                }
            ],
            "application_integration": [
                {
                    "install_new_apps": true,
                    "install_custom_apps": false
                }
            ]
        },
        "enterprise": {
            "price": "€100",
            "description": "for big companies with big dreams",
            "reporting": [
                {
                    "detailed_reports": true,
                    "weekly_data_reports": true,
                    "create_your_own_reports": true
                }
            ],
            "blog": [
                {
                    "create_your_own_blog": true,
                    "upload_images": true
                }
            ],
            "file_storgae": [
                {
                    "upload_files": false,
                    "share_files_with_team": true,
                    "watch_videos": false
                }
            ],
            "application_integration": [
                {
                    "install_new_apps": true,
                    "install_custom_apps": false
                }
            ]
        },
        "starter": {
            "price": "€3",
            "description": "Good place to start",
            "reporting": [
                {
                    "detailed_reports": false,
                    "weekly_data_reports": true,
                    "create_your_own_reports": false
                }
            ],
            "blog": [
                {
                    "create_your_own_blog": true,
                    "upload_images": false
                }
            ],
            "file_storgae": [
                {
                    "upload_files": false,
                    "share_files_with_team": true,
                    "watch_videos": false
                }
            ],
            "application_integration": [
                {
                    "install_new_apps": false,
                    "install_custom_apps": true
                }
            ]
        }
    }
}
```

*sort both the plans and available options*
*GET 'http:{{base_url}}/v1/pricing?sort=true&plans=starter,advanced,enterprise'*

```javascript
{
    "success": true,
    "message": "Pricing sucessfully fetched",
    "data": {
        "advanced": {
            "application_integration": [
                {
                    "install_new_apps": true,
                    "install_custom_apps": false
                }
            ],
            "blog": [
                {
                    "create_your_own_blog": true,
                    "upload_images": true
                }
            ],
            "description": "For the startup with more needsGood place to start",
            "file_storgae": [
                {
                    "upload_files": true,
                    "share_files_with_team": true,
                    "watch_videos": false
                }
            ],
            "price": "€10",
            "reporting": [
                {
                    "detailed_reports": true,
                    "weekly_data_reports": true,
                    "create_your_own_reports": true
                }
            ]
        },
        "enterprise": {
            "application_integration": [
                {
                    "install_new_apps": true,
                    "install_custom_apps": false
                }
            ],
            "blog": [
                {
                    "create_your_own_blog": true,
                    "upload_images": true
                }
            ],
            "description": "for big companies with big dreams",
            "file_storgae": [
                {
                    "upload_files": false,
                    "share_files_with_team": true,
                    "watch_videos": false
                }
            ],
            "price": "€100",
            "reporting": [
                {
                    "detailed_reports": true,
                    "weekly_data_reports": true,
                    "create_your_own_reports": true
                }
            ]
        },
        "starter": {
            "application_integration": [
                {
                    "install_new_apps": false,
                    "install_custom_apps": true
                }
            ],
            "blog": [
                {
                    "create_your_own_blog": true,
                    "upload_images": false
                }
            ],
            "description": "Good place to start",
            "file_storgae": [
                {
                    "upload_files": false,
                    "share_files_with_team": true,
                    "watch_videos": false
                }
            ],
            "price": "€3",
            "reporting": [
                {
                    "detailed_reports": false,
                    "weekly_data_reports": true,
                    "create_your_own_reports": false
                }
            ]
        }
    }
}
```
To easily get started, copy this curl and import directly on `postman`, `insomnia` etc.

```javascript
curl --location --request GET 'http://localhost:8080/v1/pricing?sort=true&plans=starter,advanced,enterprise'
```

## To run tests

`npm run test`



