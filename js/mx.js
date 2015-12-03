var mxVersions = [
    {
        version: '4.4',
        csps: [
            {
                name: 'AccessMgr',
                version: '',
                features: [
                    {
                        name: 'Single User Without Whitelist',
                        specifics: [
							{
                                name: 'Mode Supported',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Single User with Whitelist',
                        specifics: [
                            {
                                name: 'Set Verification Mode',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Add Application Signature',
                                compatibility: [                                        
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Delete Application Signature',
                                compatibility: [    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Allow Application To Submit XML',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },	
                                ]
                            },
                            {
                                name: 'Disallow Application from Submitting XML',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							  {
                                name: 'Add No Whitelist Package',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Add Specified Whitelist Package(s)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Delete No Whitelist Packages',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Delete Specified Whitelist Package(s)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Delete All Whitelist Packages',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Full Access',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Reduced Access',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },

                        ]
                    }
                ]
            },
			{
                name: 'AnalyticsMgr',
                version: '',
                features: [
				{
                        name: 'Analytics',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					 {
                        name: 'Transport Method',
                        specifics: [
                            {
                                name: 'Cloud Transport',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'File Transport',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'GroupAction',
                        specifics: [
                            {
                                name: 'WWAN Performance',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'WLAN Performance',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Battery and CPU Status',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'System Information',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'GPS Information',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Analytics Data Gathering Levels',
                        specifics: [
                            {
                                name: 'None',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Low',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Medium',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'High',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'AppMgr',
                version: '',
                features: [
                    {
                        name: 'Application Management',
                        specifics: [
                            {
                                name: 'Install Application',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },

                                ]
                            },
							{
                                name: 'Uninstall Application',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },

                                ]
                            },
							{
                                name: 'Upgrade Application',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },

                                ]
                            },
							{
                                name: 'Set Default Launcher',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },

                                ]
                            },
							{
                                name: 'Enable Application',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },

                                ]
                            },
							{
                                name: 'Disable Application',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Clear Recent Apps List',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Protected List Management',
                        specifics: [
                            {
                                name: 'Add Application to Protected List',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Remove Application from Protected List',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Remove All Applications from Protected List',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }							
                        ]
                    },
                    {
                        name: 'Application Info Management',
                        specifics: [
                            {
                                name: 'Enable Access to App Info for All Applications ',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Disable Access to App Info for All Applications ',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
				name: 'AudioVolUIMgr',
				version: '',
				features: [
					{
						name: 'Mute/Vibrate State',
						specifics: [
							{
								name: 'Set the device to Mute/Vibrate/Unmute mode',
								compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							}
						]
					},
					{
						name: 'Current Active Profile Action',
						specifics: [
							{
								name: 'Set an Audio UI Profile as the current Profile',
								compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							},
							{
								name: 'Adjust to the Preset volume level of the current Profile',
								compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							},
							{
								name: 'Set the FactoryPreset Profile as the current Profile',
								compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							}
						]
					},
					{
						name: 'Audio UI Profile Actions',
						specifics: [
							{
								name: 'Add an Audio UI Profile',
								compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							},
							{
								name: 'Remove an Audio UI Profile',
								compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							}
						]
					}
				]
			},
			{
				name: 'BatteryMgr',
				version: '',
				features: [
					{
						name: 'Configure the battery decommission thresholds',
						specifics: [
							{
								name: 'Set the Battery Usage Decommissioned Threshold',
								compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							},
							{
								name: 'Set the Battery Percentage Decommissioned Threshold',
								compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
								]
							}
						]
					}
				]
			},
			{
                name: 'BrowserMgr',
                version: '',
                features: [
                    {
                        name: 'Configure Default Homepage',
                        specifics: [
                            {
                                name: 'Set Default Homepage',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Remember Passwords',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [									
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
                                ]
                            },
							{
                                name: 'Turn Off',
                                compatibility: [									
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
                                ]
                            }
                        ]
                    },
					{
                        name: 'Save Form Data',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Turn Off',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'CameraMgr',
                version: '',
                features: [
                    {
                        name: 'Use All Cameras',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Use Front Camera',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Use Rear Camera',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'CellularMgr',
                version: '',
                features: [
                    {
                        name: 'Data Roaming',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Background Data',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }, 
							{
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'CertMgr',
                version: '',
                features: [
                    {
                        name: 'Initialize KeyStore',
                        specifics: [
                            {
                                name: 'Initialize Android KeyStore',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Install',
                        specifics: [
                            {
                                name: 'Certificate Alias',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'CA Certificate (.PEM)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Client Certificate (.PEM)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Client Certificate with Private key(.PFX file)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Client Certificate with Private key(.P12 file)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Client Certificate with Private key(.PKCS12 file)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Reference Certificate File',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Private Key Password',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Automatically Adjust Clock',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Uninstall certificate',
                        specifics: [
                            {
                                name: 'Certificate Alias',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'CA Certificate (.PEM)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Client Certificate (.PEM)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Client Certificate with Private key(.PFX file)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Client Certificate with Private key(.P12 file)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Client Certificate with Private key(.PKCS12 file)',
                                compatibility: [
                                   {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },

                        ]
                    }
                ]
            },
			{
                name: 'Clock',
                version: '',
                features: [
					{
                        name: 'Auto Time Configuration',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Turn Off',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Set NTP Server',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Sync Interval',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Manual Time Configuration',
                        specifics: [
                            {
                                name: 'Set Date',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Set Time',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Set TimeZone',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
                ]
            },
			{
                name: 'ComponentMgr',
                version: '',
                features: [
                    {
                        name: 'Set the State of the Ethernet Compontent',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Enable or Disable Ethernet Usage',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'CspMgr',
                version: '',
                features: [
                    {
                        name: 'All features',
                        specifics: [
                            {
                                name: '',
                                compatibility: [
																		
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'DevAdmin',
                version: '',
                features: [
                    {
                        name: 'Screen Lock Timeout Interval',
                        specifics: [
                            {
                                name: 'Change (1,15,30,60,120)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 JB',
                                        device: 'TC70',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
					{
                        name: 'Install Apps form Unknown Sources',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 JB',
                                        device: 'TC70',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Turn Off',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 JB',
                                        device: 'TC70',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Device Administration',
                        specifics: [
                            {
                                name: 'Turn On ',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 JB',
                                        device: 'TC70',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Turn Off ',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 JB',
                                        device: 'TC70',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'DhcpOptionMgr',
                version: '',
                features: [
                    {
                        name: 'Host Name',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    },
					{
                        name: 'User Class',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    },
					{
                        name: 'Broadcast Address',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    },
					{
                        name: 'NTP Server',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    },
					{
                        name: 'TFTP Server Name',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    },
					{
                        name: 'Boot File Name',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    },
					{
                        name: 'Domain Search',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    },
					{
                        name: 'TFTP Server Address',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            
                        ]
                    }
                ]
            },
			{
                name: 'DisplayMgr',
                version: '',
                features: [
                    {
                        name: 'Screen Timeout',
                        specifics: [
                            {
                                name: 'Change (15,30,...)',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                ]
                            },
                            {
                                name: 'Do not change interval',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                ]
                            },
                        ]
                    }
                ]
            },
			{
                name: 'EncryptMgr',
                version: '',
                features: [
                    {
                        name: 'Key Management',
                        specifics: [
                            {
                                name: 'Install Key',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Revoke Key',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'EFS(Encrypted File System) Management',
                        specifics: [
                            {
                                name: 'Create EFS',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Delete EFS',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'SD Card Management',
                        specifics: [
                            {
                                name: 'Encrypt SD Card',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Format SD Card',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'GprsMgr',
                version: '',
                features: [
                    {
                        name: 'APN Actions',
                        specifics: [
                            {
                                name: 'Add/Replace',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Remove Existing',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Remove All',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'APN Settings',
                        specifics: [
                            {
                                name: 'Carrier',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'APN Name',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Replace',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Make Default',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Access Point',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'User Name',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Password',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
                ]
            },
			{
                name: 'Intent',
                version: '',
                features: [
                    {
                        name: 'Intent Types',
                        specifics: [
                            {
                                name: 'Start Activity',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Start Service',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Broadcast',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
					{
                        name: 'Intent Details',
                        specifics: [
                            {
                                name: 'Android Action Name',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },{
                                name: 'URI',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'File',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'MIME Type',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Package Name',
                                compatibility: [		
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Class Name',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
					{
                        name: 'Intent Extras Types',
                        specifics: [
                            {
                                name: 'Standard Integer',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Character',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Character Sequence',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Floating Point',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Long Interger',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Boolean',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Short',
                                compatibility: [		
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Double Precision Floating Point',
                                compatibility: [		
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'String',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'String Byte Integer',
                                compatibility: [	
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }, 
			{
                name: 'KeyMappingMgr',
                version: '',
                features: [
				
					{
                        name: 'Add',
                        specifics: [
                            {
                                name: 'Key Code Key Mapping to a Table',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Trigger Key Mapping to a Table',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
							{
                                name: 'Intent Key Mapping to a Table',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Remove',
                        specifics: [
                            {
                                name: 'All Key Mappings from All Tables',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            }
                        ]
                    },
                ]
            },
			{
                name: 'LicenseMgr',
                version: '',
                features: [
                    {
                        name: 'Add License from BLOB',
                        specifics: [
                            {
                                name: '',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Add License from referenced File',
                        specifics: [
                            {
                                name: '',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Remove License by name',
                        specifics: [
                            {
                                name: '',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'MX',
                version: '',
                features: [
                    {
                        name: 'All features',
                        specifics: [
                            {
                                name: '',
                                compatibility: [									
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'1'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'1'
									},
                                ]
                            },
                        ]
                    },
                ]
            },
			{
                name: 'PersistMgr',
                version: '',
                features: [
                    {
                        name: 'Persist Actions',
                        specifics: [
                            {
                                name: 'Make current XML persistent',
                                compatibility: [
                                   {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Remove persistent XML',
                                compatibility: [
                                   {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Enable the specified persistent profile',
                                compatibility: [
                                   {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Disable the specified persistent profile',
                                compatibility: [
                                   {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'PowerKeyMgr',
                version: '',
                features: [
                    {
                        name: 'Airplane Mode Power Key Menu Option',
                        specifics: [
                            {
                                name: 'Show Menu Option',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Do not Show Menu Option',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Touch Panel Power Key Menu Option',
                        specifics: [
                            {
                                name: 'Show Menu Option',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Do not Show Menu Option',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Safe Mode Power Key Menu Option',
                        specifics: [
                            {
                                name: 'Show Menu Option',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Do not Show Menu Option',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    },
					{
                        name: 'Auto Screen Lock',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'PowerMgr',
                version: '',
                features: [
                    {
                        name: 'Device Action',
                        specifics: [
                            {
                                name: 'Sleep',
                                compatibility: [                                    
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'Supported in V02.08.0520 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: 'Supported in V030515 or higher',
										supported:'1'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Reboot',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Enterprise Reset',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Factory Reset',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Full Device Wipe',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'OsUpdate',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'SdCardMgr',
                version: '',
                features: [
                    {
                        name: 'SD Card Usage',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
			{
                name: 'SettingsMgr',
                version: '',
                features: [
                    {
						name: 'Enterprise Reset',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
                        ]
                    },
                    {
                        name: 'WiFi',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Unknown Sources',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Airplane Mode',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
						]
					},
					{
                        name: 'Access Apps Section',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
                            {
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                ]
                            },
						]
					}
				]
			},
			{
                name: 'TouchMgr',
                version: '',
                features: [
                    {
						name: 'TouchAction',
                        specifics: [
                            {
                                name: 'Stylus and Finger',
                                compatibility: [
									{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'1'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'1'
									},
								]
							},
							{
                                name: 'Glove and Finger',
                                compatibility: [
								{
										name: 'MC32 JB',
										device: 'MC32',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 JB',
										device: 'MC40',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'1'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'1'
									},
								]
							}
						]
					}
				]
			},
			{
                name: 'UiMgr',
                version: '',
                features: [
                    {
						name: 'Clipboard Management',
                        specifics: [
                            {
                                name: 'Enable Usage',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable Usage',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Clear Clipboard - True',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
                            {
                                name: 'Clear Clipboard - False',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            
						]
					},
					{
						name: 'Auto Correct',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Home Key',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Bluetooth Paring Popup',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Set Current Locale',
                        specifics: [
                            {
                                name: 'Canada',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Canada French',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'China',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'English',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'France',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'French',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'German',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Germany',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Italian',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Italy',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Japan',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Japanese',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Korea',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Korean',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'PRC',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Simplified Chinese',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Taiwan',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Traditional Chinese',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'UK',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'US',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Define Input Method',
                        specifics: [
                            {
                                name: 'English',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Japanese',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Chinese',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'User Defined',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'User Defined Input Method Specifics',
                        specifics: [
                            {
                                name: 'Package Name of Input Method',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Class Name of Input Method ',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					}
				]
			},
			{
                name: 'UsbMgr',
                version: '',
                features: [
                    {
						name: 'USB Module Usage',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'USB External Storage Usage',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'USB ADB Usage',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Access device storage from PC via All USB Methods',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Access device storage from PC via USB UMS',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Access device storage from PC via USB MTP',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					},
					{
						name: 'Access device storage from PC via USB PTP',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					}
				]
			},
			{
                name: 'Wi-Fi',
                version: '',
                features: [
				{
						name: 'System Settings',
                        specifics: [
						{
                                name: 'Wi-Fi Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Wi-Fi Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Network Notification',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
                            {
								
                                name: 'Sleep Policy',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
						]
					},
                    {
						name: 'Regulatory',
                        specifics: [
                            {
                                name: 'Country Selection',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'Radio',
                        specifics: [
                            {
                                name: 'Band Selection',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Wi-Fi Channels',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'Network Action',
                        specifics: [
                            {
                                name: 'Add a New Open Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Add a New WPA/PSK Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Add a New PEAP/MSCHAPV2 Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Add a New EAP/TLS Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Remove a Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Connect to a Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disconnect from a Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Enable a Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable a Network',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Remove all Networks',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
						]
					},
					{
						name: 'Wi-Fi Profiles',
                        specifics: [
                            {
                                name: 'SSID',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Security Mode',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'DHCP',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Proxy',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'WPA Mode',
                        specifics: [
                            {
                                name: 'Open',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'WPA PSK',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'WPA2 PSK',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'WPA/WPA2 PSK',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Static WEP',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'Authentication Mode',
                        specifics: [
                            {
                                name: 'EAP-TLS',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'EAP-FAST-GTC',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'EAP-FAST-MSCHAPV2',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'EAP-TTLS-PAP',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'EAP-TTLS-MSCHAP',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'EAP-TTLS-MSCHAPV2',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'LEAP',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'PEAP-MSCHAPV2',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'PEAP-GTC',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'Encryption Details',
                        specifics: [
                            {
                                name: 'Encryption Type',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Passphrase - Hex key',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'Authentication Details',
                        specifics: [
                            {
                                name: 'Identity',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Password',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Anonymous Identity',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Server Certificate',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							},
							{
                                name: 'Client Certificate',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'Diagnostic Options',
                        specifics: [
                            {
                                name: 'Fusion Advanced Logging',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: '',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: '',
										supported:'0'
									},
								]
							}
						]
					},
					{
						name: 'Advanced Options',
                        specifics: [
                            {
                                name: 'AutoTimeConfig',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Hyper Fast Secure Roam',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'CCKM',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Fast Transition Roam Algorithm',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Fast Transition Resource Request',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Opportunistic Key Caching',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'PMKID Caching',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Pre-Authentication',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'PowerSave',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Advanced Logging',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'FIPS',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Restricted Settings UI',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Radio Resource Measurement(802.​11K)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Management Frame Protection Mode(802.​11w)',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Band Preference',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'FTOverTheDS',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'AggregatedFT',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'ScanAssist',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Coverage Hole Detection',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'Sub-Net Roam',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							},
							{
                                name: 'WANCountry',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: 'TBD',
										supported:'1'
                                    },
									{
										name: 'MC67 JB',
										device: 'MC67',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC18 KK',
										device: 'MC18',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC40 KK',
										device: 'MC40',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'MC92 KK',
										device: 'MC92',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC55 KK',
										device: 'TC55',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC70 KK',
										device: 'TC70',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
									{
										name: 'TC75 KK',
										device: 'TC75',
										os: 'KK',
										notes: 'TBD',
										supported:'0'
									},
								]
							}
						]
					}
				]
			},
			{
                name: 'WirelessMgr',
                version: '',
                features: [
                    {
						name: 'Bluetooth',
                        specifics: [
                            {
                                name: 'Enable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Disable',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
						]
					},
                    {
                        name: 'NFC',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
					{
                        name: 'GPS',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'WWAN',
                        specifics: [
                            {
                                name: 'Turn On',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                            {
                                name: 'Turn Off',
                                compatibility: [
									{
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'0'
                                    },
									{
										name: 'TC55 JB',
										device: 'TC55',
										os: 'JB',
										notes: '',
										supported:'0'
									},
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: 'Supported in V2.52.02 or higher',
										supported:'1'
                                    },
                                    {
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'0'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                ]
                            },
                        ]
                    }
				]
			},
			{
                name: 'XmlMgr',
                version: '',
                features: [
                    {
						name: 'XML Processing Mode',
                        specifics: [
                            {
                                name: 'Execute all to end',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Execute until error, then stop',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Try until error, then Skip to Catch',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							},
							{
                                name: 'Catch error, Execute remainder',
                                compatibility: [
                                    {
                                        name: 'MC32 JB',
                                        device: 'MC32',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC40 JB',
                                        device: 'MC40',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'MC67 JB',
                                        device: 'MC67',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC55 JB',
                                        device: 'TC55',
                                        os: 'JB',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC18 KK',
                                        device: 'MC18',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC40 KK',
                                        device: 'MC40',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'MC92 KK',
                                        device: 'MC92',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC55 KK',
                                        device: 'TC55',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
									{
                                        name: 'TC70 KK',
                                        device: 'TC70',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
                                    {
                                        name: 'TC75 KK',
                                        device: 'TC75',
                                        os: 'KK',
                                        notes: '',
										supported:'1'
                                    },
								]
							}
						]
					}
				]
			}
        ]
    },
	
]