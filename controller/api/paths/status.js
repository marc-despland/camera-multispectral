module.exports = function(statusService){
    let operations = {
      GET
    };
   
    function GET(req, res, next) {
      res.status(200).json(statusService.getStatus());
    }
   
    // NOTE: We could also use a YAML string here.
    GET.apiDoc = {
        operationId: 'getStatus',
        summary: 'Returns the status of the component',
        security: [],
        responses: {
            '200': {
                description: 'The status of the component',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Status'
                        }
                    }
                }
            }
        }
    };
    
    return operations;
  }