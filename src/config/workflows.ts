import { WorkflowConfig } from '@/components/WorkflowBase';
import { BarChart3 } from 'lucide-react';

// Freestyle Loop - Only Loop Over Rows workflow
export const workflows: Record<string, WorkflowConfig> = {
  'loop-over-rows': {
    id: 'loop-over-rows',
    title: 'Freestyle Loop Over Rows',
    description: 'AI batch processing for any CSV data with custom prompts and templates',
    icon: BarChart3,
    color: 'emerald',
    status: 'live',
    category: 'Data Processing',
    
    inputs: [
      {
        id: 'csv_data',
        label: 'CSV Data',
        type: 'csv',
        placeholder: 'Name,Email,Company\nJohn Doe,john@example.com,Tech Corp',
        required: true,
        helpText: 'Upload any CSV data you want to process'
      },
      {
        id: 'prompt',
        label: 'Custom AI Instructions',
        type: 'textarea',
        placeholder: 'Tell the AI what you want to learn about each row...',
        required: true,
        helpText: 'Describe exactly what analysis or processing you want for each data row'
      }
    ],
    
    templates: [
      {
        id: 'lead-scoring',
        title: 'Lead Scoring',
        description: 'Score and analyze sales leads',
        prompt: 'Analyze each lead and provide: Lead Score (1-10), Company Size, Industry, and Likelihood to convert (High/Medium/Low).',
        sampleData: {
          csv_data: `Name,Email,Company,Website
John Smith,john@techcorp.com,TechCorp Inc,techcorp.com
Sarah Johnson,sarah@innovate.io,Innovate Solutions,innovate.io
Mike Chen,mike@startupxyz.com,StartupXYZ,startupxyz.com`
        }
      },
      {
        id: 'content-analysis',
        title: 'Content Analysis',
        description: 'Categorize and analyze content',
        prompt: 'Analyze each content piece and provide: Category, Target Audience, Quality Score (1-10), and Key insights.'
      },
      {
        id: 'customer-feedback',
        title: 'Customer Feedback',
        description: 'Analyze customer reviews and feedback',
        prompt: 'Analyze each feedback and provide: Sentiment (Positive/Negative/Neutral), Key Issues, and Recommendations.'
      },
      {
        id: 'data-enrichment',
        title: 'Data Enrichment',
        description: 'Enrich existing data with additional insights',
        prompt: 'Enrich each data row with additional information and insights relevant to the business context.'
      }
    ],
    
    endpoint: 'https://scaile--loop-over-rows-fastapi-app.modal.run/process',
    supportsGoogleSearch: true,
    supportsTestMode: true,

    // Freestyle mode is the default
    modes: [
      { id: 'freestyle', label: 'Freestyle' }
    ],
    defaultModeId: 'freestyle',
    
    estimatedTime: {
      base: 15,
      perItem: 5,
      withSearch: 8
    },
    
    outputType: 'table',
    downloadable: true,
    
    visualExplanation: {
      title: 'How Freestyle Loop Works',
      overview: 'Process any CSV data with custom AI prompts. Perfect for data analysis, lead qualification, content categorization, or any batch processing task.',
      estimatedTime: '2-10 minutes',
      complexity: 'easy',
      steps: [
        {
          step: 1,
          title: 'Upload Your Data',
          description: 'Upload any CSV file with the data you want to process',
          icon: 'upload',
          type: 'input',
          example: 'customer_list.csv, product_data.csv, or any structured data',
          details: 'Supports any CSV format with any number of columns and rows'
        },
        {
          step: 2,
          title: 'Create Custom Prompt',
          description: 'Tell the AI exactly what to do with each row of data',
          icon: 'settings',
          type: 'config',
          example: '"Analyze this customer data and determine their buying intent and preferred communication channel"',
          details: 'Use templates for common tasks or create completely custom analysis instructions'
        },
        {
          step: 3,
          title: 'AI Processing',
          description: 'Advanced AI processes each row according to your instructions',
          icon: 'cpu',
          type: 'processing',
          example: 'Row processing with custom logic, web research, and intelligent analysis',
          details: 'Each row is processed individually for maximum accuracy and customization'
        },
        {
          step: 4,
          title: 'Enhanced Results',
          description: 'Download your data enhanced with AI-generated insights',
          icon: 'download',
          type: 'output',
          example: 'Original CSV + new columns with AI analysis results',
          details: 'Results include confidence scores, processing metadata, and downloadable formats'
        }
      ],
      useCases: [
        'Lead qualification and scoring',
        'Content analysis and categorization',
        'Customer feedback analysis',
        'Data enrichment and enhancement',
        'Market research processing',
        'Custom business intelligence tasks'
      ],
      tips: [
        'Use templates to get started quickly',
        'Save your custom prompts for reuse',
        'Be specific in your instructions for better results',
        'Test with small datasets first'
      ]
    }
  }
};

// Helper functions
export const getWorkflow = (id: string): WorkflowConfig | undefined => {
  return workflows[id];
};

export const getAllWorkflows = (): WorkflowConfig[] => {
  return [workflows['loop-over-rows']];
};

export const getWorkflowsByStatus = (live: boolean = true): WorkflowConfig[] => {
  return getAllWorkflows().filter(workflow => 
    live ? workflow.status === 'live' : workflow.status === 'coming-soon'
  );
};