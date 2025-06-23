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
            },
            {
				name: 'Update',
				value: 'update',
				description: 'Update a document',
				action: 'Update a document',
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

    
	/* -------------------------------------------------------------------------- */
	/*                                     ...                                    */
	/* -------------------------------------------------------------------------- */
];