import type { INodeProperties } from 'n8n-workflow';

export const documentOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['document'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a document',
                action: 'Create a document',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/save/'
                    }
                }
            },
            {
                name: 'List',
                value: 'list',
                description: 'List documents',
                action: 'List documents',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/list/'
                    }
                }
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a document',
                action: 'Update a document',
                routing: {
                    request: {
                        method: 'PATCH',
                        url: '=/update/{{$parameter.documentId}}/'
                    }
                }
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a document',
                action: 'Delete a document',
            },
        ],
        default: 'create',
    },
];

export const documentFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                  create                                    */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Url',
        name: 'url',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['create'],
            },
        },
        description: 'The document\'s unique URL. If you don\'t have one, you can provide a made up value such as https://yourapp.com#document1.',
        routing: {
            request: {
                body: {
                    url: '={{$value}}'
                }
            }
        }
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Author',
                name: 'author',
                type: 'string',
                default: '',
                description: 'The document\'s author, it will overwrite the original author (if found during the parsing step)',
                routing: {
                    request: {
                        body: {
                            author: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Category',
                name: 'category',
                type: 'options',
                default: 'article',
                options: [
                    {
                        name: 'Article',
                        value: 'article',
                    },
                    {
                        name: 'Email',
                        value: 'email',
                    },
                    {
                        name: 'EPUB',
                        value: 'epub',
                    },
                    {
                        name: 'Highlight',
                        value: 'highlight',
                    },
                    {
                        name: 'Note',
                        value: 'note',
                    },
                    {
                        name: 'PDF',
                        value: 'pdf',
                    },
                    {
                        name: 'RSS',
                        value: 'rss',
                    },
                    {
                        name: 'Tweet',
                        value: 'tweet',
                    },
                    {
                        name: 'Video',
                        value: 'video',
                    },
                ],
                description: 'Default is guessed based on the URL, usually article',
                routing: {
                    request: {
                        body: {
                            category: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'HTML',
                name: 'html',
                type: 'string',
                default: '',
                description: 'The document\'s content, in valid html. If you don\'t provide this, we will try to scrape the URL you provided to fetch html from the open web.',
                routing: {
                    request: {
                        body: {
                            html: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Image URL',
                name: 'image_url',
                type: 'string',
                default: '',
                description: 'An image URL to use as cover image',
                routing: {
                    request: {
                        body: {
                            image_url: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Location',
                name: 'location',
                type: 'options',
                default: 'new',
                options: [
                    {
                        name: 'New',
                        value: 'new',
                    },
                    {
                        name: 'Later',
                        value: 'later',
                    },
                    {
                        name: 'Archive',
                        value: 'archive',
                    },
                    {
                        name: 'Feed',
                        value: 'feed',
                    },
                ],
                description: 'Represents the initial location of the document (previously called triage_status). Note: if you try to use a location the user doesn\'t have enabled in their settings, this value will be set to their default location.',
                routing: {
                    request: {
                        body: {
                            location: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Notes',
                name: 'notes',
                type: 'string',
                default: '',
                description: 'A top-level note of the document',
                routing: {
                    request: {
                        body: {
                            notes: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Published Date',
                name: 'published_date',
                type: 'dateTime',
                default: '',
                description: 'A datetime representing when the document was published in the ISO 8601 format; default timezone is UTC. Example: "2020-07-14T20:11:24+00:00".',
                routing: {
                    request: {
                        body: {
                            published_date: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Saved Using',
                name: 'saved_using',
                type: 'string',
                default: '',
                description: 'This value represents the source of the document',
                routing: {
                    request: {
                        body: {
                            saved_using: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Should Clean HTML',
                name: 'should_clean_html',
                type: 'boolean',
                default: false,
                description: 'Whether to automatically clean the html and parse the metadata (title/author) of the document for you. Only valid when html is provided.',
                routing: {
                    request: {
                        body: {
                            should_clean_html: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Summary',
                name: 'summary',
                type: 'string',
                default: '',
                description: 'Summary of the document',
                routing: {
                    request: {
                        body: {
                            summary: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Tags',
                name: 'tags',
                type: 'string',
                default: '',
                description: 'A list of strings containing tags, separated by commas. Example: "tag1,tag2".',
                routing: {
                    request: {
                        body: {
                            tags: '={{$value.split(",").map(tag => tag.trim())}}'
                        }
                    }
                }
            },
            {
                displayName: 'Title',
                name: 'title',
                type: 'string',
                default: '',
                description: 'The document\'s title, it will overwrite the original title of the document',
                routing: {
                    request: {
                        body: {
                            title: '={{$value}}'
                        }
                    }
                }
            },]
    },

    /* -------------------------------------------------------------------------- */
    /*                                   list                                     */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Additional Options',
        name: 'additionalOptions',
        type: 'collection',
        placeholder: 'Add Option',
        default: {},
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['list'],
            },
        },
        options: [
            {
                displayName: 'Category',
                name: 'category',
                type: 'options',
                default: 'article',
                options: [
                    {
                        name: 'Article',
                        value: 'article',
                    },
                    {
                        name: 'Email',
                        value: 'email',
                    },
                    {
                        name: 'EPUB',
                        value: 'epub',
                    },
                    {
                        name: 'Highlight',
                        value: 'highlight',
                    },
                    {
                        name: 'Note',
                        value: 'note',
                    },
                    {
                        name: 'PDF',
                        value: 'pdf',
                    },
                    {
                        name: 'RSS',
                        value: 'rss',
                    },
                    {
                        name: 'Tweet',
                        value: 'tweet',
                    },
                    {
                        name: 'Video',
                        value: 'video',
                    },
                ],
                description: 'The document\'s category',
                routing: {
                    request: {
                        qs: {
                            category: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Document ID',
                name: 'id',
                type: 'string',
                default: '',
                description: 'The document\'s unique ID. Using this parameter it will return just one document, if found.',
                routing: {
                    request: {
                        qs: {
                            id: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Location',
                name: 'location',
                type: 'options',
                default: 'new',
                options: [
                    {
                        name: 'Archive',
                        value: 'archive',
                    },
                    {
                        name: 'Feed',
                        value: 'feed',
                    },
                    {
                        name: 'Later',
                        value: 'later',
                    },
                    {
                        name: 'New',
                        value: 'new',
                    },
                    {
                        name: 'Shortlist',
                        value: 'shortlist',
                    },
                ],
                description: 'The document\'s location',
                routing: {
                    request: {
                        qs: {
                            location: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Page Cursor',
                name: 'pageCursor',
                type: 'string',
                default: '',
                description: 'A string returned by a previous request to this endpoint. Use it to get the next page of documents if there are too many for one request.',
                routing: {
                    request: {
                        qs: {
                            pageCursor: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Tag',
                name: 'tag',
                type: 'string',
                default: '',
                description: 'The document\'s tag key. Pass up to 5 tag parameters (separated by commas) to find documents having all the tags listed.',
                routing: {
                    request: {
                        qs: {
                            tag: '={{$value.split(",").map(tag => tag.trim())}}'
                        },
                        arrayFormat: 'repeat',
                    }
                },
            },
            {
                displayName: 'Updated After',
                name: 'updatedAfter',
                type: 'dateTime',
                default: '',
                description: 'Fetch only documents updated after this date (ISO 8601 format)',
                routing: {
                    request: {
                        qs: {
                            updatedAfter: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'With HTML Content',
                name: 'withHtmlContent',
                type: 'boolean',
                default: false,
                description: 'Whether to include the html_content field in each document\'s data. Please note that enabling this feature may slightly increase request processing time.',
                routing: {
                    request: {
                        qs: {
                            withHtmlContent: '={{$value}}'
                        }
                    }
                }
            },
        ]
    },

    /* -------------------------------------------------------------------------- */
    /*                                  update                                    */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Document ID',
        name: 'documentId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['update'],
            },
        },
        description: 'The unique ID of the document to update',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['update'],
            },
        },
        options: [
            {
                displayName: 'Author',
                name: 'author',
                type: 'string',
                default: '',
                description: 'The document\'s author, it will overwrite the original author (if found during the parsing step)',
                routing: {
                    request: {
                        body: {
                            author: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Category',
                name: 'category',
                type: 'options',
                default: 'article',
                options: [
                    {
                        name: 'Article',
                        value: 'article',
                    },
                    {
                        name: 'Email',
                        value: 'email',
                    },
                    {
                        name: 'EPUB',
                        value: 'epub',
                    },
                    {
                        name: 'Highlight',
                        value: 'highlight',
                    },
                    {
                        name: 'Note',
                        value: 'note',
                    },
                    {
                        name: 'PDF',
                        value: 'pdf',
                    },
                    {
                        name: 'RSS',
                        value: 'rss',
                    },
                    {
                        name: 'Tweet',
                        value: 'tweet',
                    },
                    {
                        name: 'Video',
                        value: 'video',
                    },
                ],
                description: 'The document\'s category',
                routing: {
                    request: {
                        body: {
                            category: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Image URL',
                name: 'image_url',
                type: 'string',
                default: '',
                description: 'An image URL to use as cover image',
                routing: {
                    request: {
                        body: {
                            image_url: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Location',
                name: 'location',
                type: 'options',
                default: 'archive',
                options: [
                    {
                        name: 'Archive',
                        value: 'archive',
                    },
                    {
                        name: 'Feed',
                        value: 'feed',
                    },
                    {
                        name: 'Later',
                        value: 'later',
                    },
                    {
                        name: 'New',
                        value: 'new',
                    },
                ],
                description: 'Represents the current location of the document (previously called triage_status). Note: if you try to use a location the user doesn\'t have enabled in their settings, this value will be set to their default location.',
                routing: {
                    request: {
                        body: {
                            location: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Published Date',
                name: 'published_date',
                type: 'dateTime',
                default: '',
                description: 'A datetime representing when the document was published in the ISO 8601 format; default timezone is UTC. Example: "2020-07-14T20:11:24+00:00".',
                routing: {
                    request: {
                        body: {
                            published_date: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Summary',
                name: 'summary',
                type: 'string',
                default: '',
                description: 'Summary of the document',
                routing: {
                    request: {
                        body: {
                            summary: '={{$value}}'
                        }
                    }
                }
            },
            {
                displayName: 'Title',
                name: 'title',
                type: 'string',
                default: '',
                description: 'The document\'s title, it will overwrite the original title of the document',
                routing: {
                    request: {
                        body: {
                            title: '={{$value}}'
                        }
                    }
                }
            },
        ]
    },

    /* -------------------------------------------------------------------------- */
    /*                                     ...                                    */
    /* -------------------------------------------------------------------------- */
];