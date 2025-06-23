import type { INodeProperties } from 'n8n-workflow';

export const tagOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['tag'],
            },
        },
        options: [
            {
                name: 'List',
                value: 'list',
                description: 'List tags',
                action: 'List tags',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/tags/'
                    }
                }
            },
        ],
        default: 'list',
    },
];

export const tagFields: INodeProperties[] = [
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
                resource: ['tag'],
                operation: ['list'],
            },
        },
        options: [
            {
                displayName: 'Page Cursor',
                name: 'pageCursor',
                type: 'string',
                default: '',
                description: 'A string returned by a previous request to this endpoint. Use it to get the next page of tags if there are too many for one request.',
                routing: {
                    request: {
                        qs: {
                            pageCursor: '={{$value}}'
                        }
                    }
                }
            },
        ]
    },
]; 