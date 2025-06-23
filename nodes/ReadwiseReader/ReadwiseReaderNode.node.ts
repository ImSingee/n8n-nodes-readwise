import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { documentFields, documentOperations } from './ReaderDocumentDescription';

export class ReadwiseReaderNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Readwise Reader',
		subtitle: '={{$parameter["operation"] + " " + $parameter["resource"]}}',
        name: 'readwiseReaderNode',
        icon: 'file:./readwise.svg',
		group: ['transform'],
		version: 1,
		description: 'Readwise Reader API',
		defaults: {
			name: 'Readwise Reader',
		},
		inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
			{
				name: 'readwiseApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://readwise.io/api/v3',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Document',
						value: 'document',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
				],
				default: 'document',
			},
			...documentOperations,
			...documentFields,
		],
	};
}

