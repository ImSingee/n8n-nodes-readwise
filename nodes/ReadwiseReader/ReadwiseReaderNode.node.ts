import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';

export class ReadwiseReaderNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Readwise Reader',
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
		properties: [],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [];
    }
}

