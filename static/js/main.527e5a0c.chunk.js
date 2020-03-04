(this["webpackJsonpsuper-batch-docs"]=this["webpackJsonpsuper-batch-docs"]||[]).push([[0],{100:function(e,n,t){},101:function(e,n,t){},201:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),i=t.n(o),s=(t(100),t(16)),c=t(6),l=(t(101),t(87)),u=t(234),h=t(235),d=t(245),p=t(236),m=t(239),g=t(231),_=t(240),E=t(79),b=t.n(E),f=t(39),A=t.n(f),y=(t(103),t(104),t(105),t(106),t(107),t(108),t(246)),O=t(2),C=t(80),w=t.n(C),R=t(83),T=t.n(R),k=t(82),N=t.n(k),S=t(244),v=t(237),I=t(242),z=t(45),U=t.n(z),B=function(e){var n=e.children,t=e.value,a=e.index,o=Object(O.a)(e,["children","value","index"]);return r.a.createElement(g.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},o),t===a&&n)};var x=Object(u.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper},tabs:{justifyContent:"space-between"},tab:{minWidth:"50px"},icon:{paddingRight:"1rem",display:"flex",justifyContent:"center"},appbar:{borderTopLeftRadius:"0.3rem",borderTopRightRadius:"0.3rem",alignItems:"center",flexDirection:"row",justifyContent:"space-between"},code:{marginTop:"-10px"," pre":{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"}}}})),L=Object(l.a)({overrides:{MuiTab:{root:{maxHeight:32}}},palette:{primary:{main:"#ddd"},secondary:{main:"#ff63e5"},text:{primary:"#ff63e5",secondary:"#ff63e5"},contrastThreshold:3}}),$=function(e){Object(a.useEffect)((function(){return A.a.highlightAll()}),[]);var n=x();return r.a.createElement(U.a,{source:e.code,className:n.code})};function M(e){var n=x(),t=Object(a.useState)(!1),o=Object(s.a)(t,2),i=o[0],c=o[1];return r.a.createElement(I.a,{p:2,className:n.root},r.a.createElement(h.a,{theme:L},r.a.createElement(p.a,{position:"static",className:n.appbar},r.a.createElement(S.a,{value:e.value,style:{width:"calc(100% - 44px)"},onChange:function(n,t){e.setValue(t)},"aria-label":"simple tabs example"},e.blocks.map((function(e,t){var a=Object(s.a)(e,1)[0];return r.a.createElement(v.a,Object.assign({label:a,color:"secondary"},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(t),{className:n.tab,key:t}))}))),r.a.createElement("div",{className:n.icon,onClick:function(){var n=e.blocks[e.value][1].trim().split("\n").slice(1,-1).join("\n");w()(n).then((function(){c(!0),setTimeout((function(){return c(!1)}),4e3)}))}},i?r.a.createElement(N.a,{fontSize:"small"}):r.a.createElement(T.a,{fontSize:"small"})))),e.blocks.map((function(n,t){var a=Object(s.a)(n,2)[1];return r.a.createElement(B,{value:e.value,index:t,key:t},r.a.createElement($,{code:a}))})))}function G(e){return r.a.createElement(M,Object.assign({blocks:[["bash",'```bash\n# parameters\nname="azurebatchtest"\nlocation="westus2"\n\n# create the resources\naz group create -l $location -n $name\naz storage account create -n $name -g $name\naz batch account create -l $location -n $name -g $name --storage-account $name\n```\n'],["Powershell",'```powershell\n# parameters\n$name = "azurebatchtest"\n$location = "westus2"\n\n# create the resources\naz group create -l $location -n $name\naz storage account create -n $name -l $location -g $name\naz batch account create -n $name -l $location -g $name --storage-account $name\n```\n'],["CMD","```batch\nREM parameters\nset name=azurebatchtest\nset location=westus2\n\nREM create the resources\naz group create -l %location% -n %name%\naz storage account create -n %name% -g %name%\naz batch account create -l %location% -n %name% -g %name% --storage-account %name%\n```\n"]]},e))}function D(e){return r.a.createElement(M,Object.assign({blocks:[["bash","```bash\n# Query the required parameters\nexport BATCH_ACCOUNT_NAME=$name\nexport BATCH_ACCOUNT_KEY=$(az batch account keys list -n $name -g $name --query primary)\nexport BATCH_ACCOUNT_ENDPOINT=$(az batch account show -n $name -g $name --query accountEndpoint)\nexport STORAGE_ACCOUNT_KEY=$(az storage account keys list -n $name --query [0].value)\nexport STORAGE_ACCOUNT_CONNECTION_STRING=$(az storage account show-connection-string --name $name --query connectionString)\n\n# clean up the quotes\nBATCH_ACCOUNT_KEY=$(sed -e 's/^\"//' -e 's/\"$//' <<<\"$BATCH_ACCOUNT_KEY\")\nBATCH_ACCOUNT_ENDPOINT=$(sed -e 's/^\"//' -e 's/\"$//' <<<\"$BATCH_ACCOUNT_ENDPOINT\")\nSTORAGE_ACCOUNT_KEY=$(sed -e 's/^\"//' -e 's/\"$//' <<<\"$STORAGE_ACCOUNT_KEY\")\nSTORAGE_ACCOUNT_CONNECTION_STRING=$(sed -e 's/^\"//' -e 's/\"$//' <<<\"$STORAGE_ACCOUNT_CONNECTION_STRING\")\n```\n"],["Powershell","```powershell\n$env:BATCH_ACCOUNT_NAME = $name\n$env:BATCH_ACCOUNT_KEY =  (az batch account keys list -n $name -g $name --query primary) -replace '\"',''\n$env:BATCH_ACCOUNT_ENDPOINT =  (az batch account show -n $name -g $name --query accountEndpoint) -replace '\"',''\n$env:STORAGE_ACCOUNT_KEY = (az storage account keys list -n $name --query [0].value) -replace '\"',''\n$env:STORAGE_ACCOUNT_CONNECTION_STRING= (az storage account show-connection-string --name $name --query connectionString) -replace '\"',''\n```\n"],["CMD","```batch\nREM Query the required parameters\nset BATCH_ACCOUNT_NAME=%name%\nfor /f %i in ('az batch account keys list -n %name% -g %name% --query primary') do @set BATCH_ACCOUNT_KEY=%i\nfor /f %i in ('az storage account keys list -n %name% --query [0].value') do @set STORAGE_ACCOUNT_KEY=%i\nfor /f %i in ('az batch account show -n %name% -g %rgname% --query accountEndpoint') do @set BATCH_ACCOUNT_ENDPOINT=%i\nfor /f %i in ('az storage account show-connection-string --name $name --query connectionString') do @set STORAGE_ACCOUNT_CONNECTION_STRING=%i\n\nREM clean up the quotes\nset BATCH_ACCOUNT_KEY=%BATCH_ACCOUNT_KEY:\"=%\nset BATCH_ACCOUNT_ENDPOINT=%BATCH_ACCOUNT_ENDPOINT:\"=%\nset STORAGE_ACCOUNT_KEY=%STORAGE_ACCOUNT_KEY:\"=%\nset STORAGE_ACCOUNT_CONNECTION_STRING=%STORAGE_ACCOUNT_CONNECTION_STRING:\"=%\n```\n"]]},e))}function P(e){return r.a.createElement(M,Object.assign({blocks:[["bash",'```bash\nexport AZURE_CR_NAME="MyOwnPrivateRegistry"\n\n# Create the resource group and enable querying the password from the CLI\naz acr create -n %AZURE_CR_NAME% -g %name% -l %location% --sku Basic\naz acr update -n %AZURE_CR_NAME% --admin-enabled true\n\n# Export required parameters\nexport REGISTRY_SERVER=$(az acr show -n %AZURE_CR_NAME% --query loginServer)\nexport REGISTRY_USERNAME=$(az acr credential show -n %AZURE_CR_NAME% --query username)\nexport REGISTRY_PASSWORD=$(az acr credential show -n %AZURE_CR_NAME% --query passwords[0].value)\n```\n'],["Powershell","```powershell\n$AZURE_CR_NAME = \"MyOwnPrivateRegistry\"\n\n# Create the resource group and enable querying the password from the CLI\naz acr create -n $AZURE_CR_NAME -g $name -l $location --sku Basic\naz acr update -n $AZURE_CR_NAME --admin-enabled true\n\n# Export required parameters\n$env:REGISTRY_SERVER = (az acr show -n $AZURE_CR_NAME --query loginServer) -replace '\"',''\n$env:REGISTRY_USERNAME = (az acr credential show -n $AZURE_CR_NAME --query username) -replace '\"',''\n$env:REGISTRY_PASSWORD = (az acr credential show -n $AZURE_CR_NAME --query passwords[0].value) -replace '\"',''\n\n\n$env:image_name = \"${env:REGISTRY_SERVER}/batch-worker:v1\"\n```"],["CMD","```batch\nset AZURE_CR_NAME=MyOwnPrivateRegistry\n\nREM Create the resource group and enable querying the password from the CLI\naz acr create -n %AZURE_CR_NAME% -g %name%  -l %location%--sku Basic\naz acr update -n %AZURE_CR_NAME% --admin-enabled true\n\nREM Export required parameters\nfor /f %i in ('az acr show -n %AZURE_CR_NAME% --query loginServer') do @set REGISTRY_SERVER=%i\nfor /f %i in ('az acr credential show -n %AZURE_CR_NAME% --query username') do @set REGISTRY_USERNAME=%i\nfor /f %i in ('az acr credential show -n %AZURE_CR_NAME% --query passwords[0].value') do @set REGISTRY_PASSWORD=%i\nREGISTRY_SERVER=$(sed -e 's/^\"//' -e 's/\"$//' <<<\"$REGISTRY_SERVER\")\nREGISTRY_USERNAME=$(sed -e 's/^\"//' -e 's/\"$//' <<<\"$REGISTRY_USERNAME\")\nREGISTRY_PASSWORD=$(sed -e 's/^\"//' -e 's/\"$//' <<<\"$REGISTRY_PASSWORD\")\n```"]]},e))}var j=t(84),Y=t.n(j),q=ee('# API\n\n## `Client` Objects\n\nSuperBatch Client\n\nProvides an interface for preparing, running, and pulling down data from an Azure Batch job\n\n### `Client.__init__()`\n\n```python\ndef __init__(self, image=None, **kwargs)\n```\n\n**Arguments**:\n\n- `image` _azure.batch.models.ImageReference_ - The VM image to use for the pool nodes\n  defaults to\n  ```python\n  azure.batch.models.ImageReference(\n      publisher="microsoft-azure-batch",\n      offer="ubuntu-server-container",\n      sku="16-04-lts",\n      version="latest",\n  )\n  ```\n- `**kwargs` - Additinal arguments passed to :class:`super_barch.BatchConfig`\n\n### `Client.data()`\n\n```python\n@property\ndef data(self)\n```\n\nGenerate data for persisting the configuration\n\n### `Client.from_data()`\n\n```python\n@staticmethod\ndef from_data(data)\n```\n\nRestore configuration from data\n### `Client.build_resource_file()`\n\n```python\ndef build_resource_file(self, file_path: str, container_path: str, duration_hours: int = 24) -> azure.batch.models.ResourceFile\n```\n\nUploads a local file to an Azure Blob storage container.\n\n**Arguments**:\n\n- `file_path` - The local path to the file.\n- `container_path` - The path where the file should be placed in the container before executing the task\n\n**Returns**:\n\n  A ResourceFile initialized with a SAS URL appropriate for Batch tasks.\n\n### `Client.build_output_file()`\n\n```python\ndef build_output_file(self, output_file, container_path) -> azure.batch.models.ResourceFile\n```\n\nUploads a local file to an Azure Blob storage container.\n\n**Arguments**:\n\n- `output_file` - the name of the file produced as the output by the task\n- `container_path` - the name of the file in the container\n  \n\n**Returns**:\n\n  A ResourceFile initialized with a SAS URL appropriate for Batch tasks.\n\n### `Client.add_task()`\n\n```python\ndef add_task(self, resource_files: List[models.ResourceFile], output_files: List[models.OutputFile], command_line=None)\n```\n\nAdds a task for each input file in the collection to the specified job.\n\n**Arguments**:\n\n- `resource_files` - A list of ResourceFile descriptions for the task\n- `output_files` - A list of OutputFile descriptions for the task\n- `command_line` - The command used to for the task.  Optional;\n  if missing, defaults to the command_line parameter provided when\n  instantiating this object\n\n### `Client.run()`\n\n```python\ndef run(self, wait: bool = True, **kwargs) -> None\n```\n\nRun the Batch Job\nwait: If true, wait for the batch to complete and then download the\nresults to file by calling `self.load_results()` after loading\nall the tasks to the job.\n\n**Raises**:\n\n- `BatchErrorException` - If raised by the Azure Batch Python SDK\n\n### `Client.load_results()`\n\n```python\ndef load_results(self, quiet=False) -> None\n```\n\n### `Client.print_task_output()`\n\n```python\ndef print_task_output(self, encoding=None)\n```\n\nUtility method: Prints the stdout.txt file for each task in the job.\n\n# `super_batch.BatchConfig`\n\n```python\ndef BatchConfig(**kwargs)\n```\n\nProvides an interface for preparing, running, and pulling down data from an Azure Batch job\n\n**Arguments**:\n\n- `BATCH_DIRECTORY` _string_ - Path to a directory on the local machine in which input (resource) and output files should be placed\n- `JOB_ID` _string_ - Name for the Batch Job\n\n#### Batch account Options\n\n- `BATCH_ACCOUNT_NAME` _string_ - Batch account name. **Taken from the environment when not provided**\n- `BATCH_ACCOUNT_KEY` _string_ - Batch account key. **Taken from the environment when not provided**\n- `BATCH_ACCOUNT_ENDPOINT` _string_ - Batch account endpoint. **Taken from the environment when not provided**\n\n#### Blob Storage Options\n\n- `BLOB_CONTAINER_NAME` _string_ - Name of the blob storage container for storing input (resource) and output files\n- `STORAGE_ACCOUNT_NAME` _string_ - Name of the Storage Account for storing input (resource) and output files\n- `STORAGE_ACCOUNT_KEY` _string_ - Storage account key. **Taken from the environment when not provided**\n- `STORAGE_ACCOUNT_CONNECTION_STRING` _string_ - Storage account access connection string. **Taken from the environment when not provided**\n- `STORAGE_ACCESS_DURATION_HRS` _int_ - Time in hours that the generated the storage access token will be valid for. Default: 24\n\n#### Node Pool Options\n\n- `POOL_ID` _string_ - Name of the Azure Batch Node Pool to be used\n- `POOL_NODE_COUNT` _int_ - Count for normal priority nodes in the batch pool. Only used when creating a pool.  **Ignored if the pool already exists**\n- `POOL_LOW_PRIORITY_NODE_COUNT` _int_ - Count for low priority nodes in the batch pool.    **Ignored if the pool already exists**\n- `POOL_VM_SIZE` _string_ - VM name (See the FAQ for details) **Ignored if the pool already exists**\n\n#### Docker Registry Options\n\n- `DOCKER_IMAGE` _string_ - name of the docker image\n- `REGISTRY_SERVER` _string, optional_ - Used when the docker image is hosted on a private repository. **Taken from the environment when not provided**\n- `REGISTRY_USERNAME` _string, optional_ - Used when the docker image is hosted on a private repository. **Taken from the environment when not provided**\n- `REGISTRY_PASSWORD` _string, optional_ - Used when the docker image is hosted on a private repository. **Taken from the environment when not provided**\n\n#### Automatic Cleanup:\n\n- `DELETE_POOL_WHEN_DONE` _boolean_ - Should the batch pool be deleted when the job has been completed? Default `False`\n- `DELETE_JOB_WHEN_DONE` _boolean_ - Should the batch job be deleted when the job has been completed? Default `False`\n- `DELETE_CONTAINER_WHEN_DONE` _boolean_ - should the blob storage container be deleted when the job has been completed? Default `False`\n'),F=ee("# Clean Up\n\nIn order to prevent unexpected charges, the resource group and all the\nresources it contains ( e.g. the storage account, batch account and node\npools, and the container registry) can be deleted with the following command:\n\n## PowerShell and Bash\n\n```powershell\naz group delete -n $name\n```\n\n## CMD\n\n```batch\naz group delete -n %name%\n```\n\n**Tip:** By default, Azure Subscriptions are limited to 3 Batch Accounts, and\neach Batch Account can contain up to 100 pools with 100 VMs each. If you are\nworking in a larger team, you may need to request an increase the number of\nbatch accounts or share batch accounts among your team which may require\npersisting the batch account. Remember that you are charged for the nodes in\na batch pool regardless if you are using them or not, so be sure to delete\npools or scale them to zero when not in use.\n"),H=ee('# Refactoring Your Code\n\nThe following code is a typical (if not simple) example of code that can be\nsplit up and run on Azure Batch.\n\n```python\nimport numpy as np\n\nPOWER = 3\nSIZE = (10,)\nSEEDS = (1, 12, 123, 1234)\n\nout = []\nfor i, seed in enumerate(SEEDS):\n    np.random.seed(seed)\n    tmp = np.random.uniform(size=SIZE)\n    out.append(sum(np.power(tmp, POWER)))\n\nprint(sum(out))\n```\n\nIn order to work with Azure Batch however, this code needs to be split up\ninto the parts that do the work and the parts that coordinate the work, and\nthe various parameters may be split into global parameters which apply to\nevery task and task specific parameters.\n\n## Step 1: Refactoring in place\n\nWe\'ll begin by re-factoring the code to make the various roles of the code\nand the data more clear. Although this may seem trivial, refactoring in place\nbefore splitting your code is an efficient way to ensure that the next steps\ngo smoothly.\n\n```python\nimport numpy as np\n\n# Parameters that apply to every task\nglobal_parameters = {"power": 3, "size": (10,)}\n\n# Iteration parameters\nSEEDS = (1, 12, 123, 1234)\n\n# Iterate over the tasks\ntask_results = []\nfor i, seed in enumerate(SEEDS):\n\n    # Task parameters\n    parameters = {"seed": seed}\n\n    #------------------------------\n    # Task code\n    #------------------------------\n\n    # extract parameters\n    size = global_parameters["size"]\n    power = global_parameters["power"]\n    seed = task_parameters["seed"]\n\n    # do work\n    np.random.seed(seed)\n    task_result = sum(np.power(np.random.uniform(size=size), power))\n\n    # gather the task results\n    task_results.append(task_result)\n\n# aggregate the results\nprint(sum(task_results))\n```\n\n## Step 2: Refactoring\n\nIn this step the code is split into a function (`task()`) which is responsible for executing a single task:\n\n```python\n# task.py\nimport numpy as np\n\ndef task(global_parameters, task_parameters)\n    # extract parameters\n    size = global_parameters["size"]\n    power = global_parameters["power"]\n    seed = task_parameters["seed"]\n\n    # do work\n    np.random.seed(seed)\n    return sum(np.power(np.random.uniform(size=size), power))\n```\n\nand a stub for a script (`controller.py`) which will be responsible for\ncoordinating the work:\n\n```python\n# controller.py\nimport super_batch\n\n# <<< Configure Azure Batch here >>>\nbatch_client = super_batch.client(...)\n\n# Parameters that apply to every task\nglobal_parameters = {"power": 3, "size": (10,)}\n# <<< Configure the Global Parameters Resource here >>>\n\nSEEDS = (1, 12, 123, 1234)\nfor i, seed in enumerate(SEEDS):\n    parameters = {"seed": seed}\n\n    # <<< Configure the task here >>>\n    batch_client.add_task(...)\n\n# Do the work!\nbatch_client.run()\n\n# aggregate the results\ntask_results = [...]\n\n# aggregate the results\nprint(sum(task_results))\n```\n\n## Up next\n\nIn the next step we\'ll fill in the dots and finish coordinating the work using the `super_batch` package\n'),W=ee('# The Controller Script\n\nHaving uploaded our worker and it\'s dependencies into a private Azure Container\nRegistry, to run the batch job, we will need to:\n\n* Create the task resource files and upload them into the cloud\n* Tell Azure Batch about the task, including it\'s resources and outputs\n* Set the tasks in motion and wait for them to complete\n* Download and aggregate the outputs\n\nWhile this might sound intimidating, the SuperBatch Client provides a streamlined\nAPI for coordinating these tasks. The following script uses the `Client`\nclass provided by `super_batch` to configure Azure Batch and coordinate\nuploading / downloading files to and from the Azure Blob Storage container.\n\nWhile the following is one of the longer scripts in this tutorial, it is\nmostly boiler plate code and only the sections labeled `<<< Your code here >>>`\nneed to be updated. Conveniently, these sections can be filled in by copying\nthe code from the `#controller.py` code snippet on the `splitting code` page.\n\n```python\n# ./controller.py\nimport os\nfrom os.path import join, expanduser\nimport datetime\nimport pathlib\nimport joblib\nimport super_batch\n\nfrom constants import (\n    GLOBAL_CONFIG_FILE,\n    TASK_RESOURCE_FILE,\n    TASK_OUTPUT_FILE,\n    LOCAL_RESOURCE_PATTERN,\n    LOCAL_OUTPUT_PATTERN,\n)\n\n# ------------------------------\n# Configure Azure Batch\n# ------------------------------\n\n# The `$name` of our created resources:\nNAME = os.environ.get("NAME","superbatchtest")\nIMAGE_NAME = os.environ.get("IMAGE_NAME")\nasset IMAGE_NAME is not None\n\n# a local directory where temporary files will be stored:\nBATCH_DIRECTORY = expanduser("~/temp/super-batch-test")\npathlib.Path(BATCH_DIRECTORY).mkdir(parents=True, exist_ok=True)\n\n# used to generate unique task names:\n_TIMESTAMP = datetime.datetime.utcnow().strftime("%Y%m%d%H%M%S")\n\n# instantiate the batch helper client:\nbatch_client = super_batch.client(\n    POOL_ID=NAME,\n    JOB_ID=NAME + _TIMESTAMP,\n    POOL_VM_SIZE="standard_d1_v2",\n    POOL_NODE_COUNT=0,\n    POOL_LOW_PRIORITY_NODE_COUNT=2,\n    DELETE_POOL_WHEN_DONE=False,\n    BLOB_CONTAINER_NAME=NAME,\n    BATCH_DIRECTORY=BATCH_DIRECTORY,\n    DOCKER_IMAGE="myusername/sum-of-powers:v1",\n    COMMAND_LINE="python /worker.py",\n)\n\n# ------------------------------\n# build the global parameters\n# ------------------------------\n\n# <<< YOUR CODE GOES BELOW >>>\nglobal_parameters = {"power": 3, "size": (10,)}\n# <<< YOUR CODE GOES ABOVE >>>\n\n# write the global parameters resource to disk\njoblib.dump(global_parameters, join(BATCH_DIRECTORY, GLOBAL_CONFIG_FILE))\n\n# upload the task resource\nglobal_parameters_resource = batch_client.build_resource_file(\n    GLOBAL_CONFIG_FILE, GLOBAL_CONFIG_FILE\n)\n\n# ------------------------------\n# build the batch tasks\n# ------------------------------\n\n# <<< YOUR CODE GOES BELOW >>>\nSEEDS = (1, 12, 123, 1234)\nfor i, seed in enumerate(SEEDS):\n    parameters = {"seed": seed}\n    # <<< YOUR CODE GOES ABOVE >>>\n\n    # write the resource to disk\n    local_resource_file = LOCAL_RESOURCE_PATTERN.format(i)\n    joblib.dump(parameters, join(BATCH_DIRECTORY, local_resource_file))\n\n    # upload the task resource\n    input_resource = batch_client.build_resource_file(\n        local_resource_file, TASK_RESOURCE_FILE\n    )\n\n    # create an output resource\n    output_resource = batch_client.build_output_file(\n        LOCAL_OUTPUT_FILE, LOCAL_OUTPUT_PATTERN.format(i)\n    )\n\n    # create a task\n    batch_client.add_task(\n        [input_resource, global_parameters_resource], [output_resource]\n    )\n\n# ------------------------------\n# run the batch job\n# ------------------------------\n\nbatch_client.run()\n\n# ------------------------------\n# aggregate the results\n# ------------------------------\n\ntask_results = []\nfor task in batch_client.tasks:\n    task_results.append(joblib.load(task.something))\n\n# <<< YOUR CODE GOES BELOW >>>\nprint(sum(task_results))\n# <<< YOUR CODE GOES ABOVE >>>\n```\n\n**tip:** While best practices would generally dictate that temporary files and\ndirectories should be supplied and managed by a library (e.g. tmpfile), batch\njobs may outlast your terminal session and hence you may wish to manage them\nyour self\n\n**Tip:** In the above code, a single command (`"python /worker.py",`) was\nprovided which is used for all the tasks. In some cases this might not be\nconvenient e.g. when task code expects parameters to be passed into the\ncommand line. In this case the `COMMAND_LINE` parameter can be specified at\nthe task level in `batch_client.add_task(...)`\n\n## Next Up\n\nLearn more about the configuration options that can be specified when configuring\nAzure Batch with the `super_batch.Client` by visiting the `API` page'),K=ee("# Bundle your worker code\n\nIn this step you will bundle your worker code and it's dependencies so that\nit can be executed by Azure Batch. The easiest way to replicate your current\npython environment is to export your current configuration into a\n`requirements.txt` file via:\n\n_*make sure you `pip install joblib` before calling this, as we'll use it when\nwriting the `worker.py`_\n\n```shell\npip freeze >> requirements.txt\n```\n\nNext create a docker file in the root of your project with the following:\n\n```dockerfile\n# ./Dockerfile\nFROM python:3.7\n\n# Install dependencies\nCOPY requirements.txt .\nRUN pip install --upgrade pip \\\n    && pip install -r requirements.txt\n\n# Copy the worker and constants\nCOPY task.py worker.py constants.py .\n```\n\nNext log into the registry\n\n```powershell\n# *Note that the acr login token is typically only valid for one hour*\n$AZURE_CR_NAME = \"myownprivateregistry\"\naz acr login --name $AZURE_CR_NAME\n```\n\nAnd push your code to the registry\n\n```powershell\n# define the image name\n$env:REGISTRY_SERVER = (az acr show -n $AZURE_CR_NAME --query loginServer) -replace '\"',''\n$IMAGE_NAME = \"${env:REGISTRY_SERVER}/batch-worker:v1\"\n\n# build the image locally\ndocker build . -t $IMAGE_NAME\n\n# push the image to the private registry\ndocker push $IMAGE_NAME\n```\n\n**Tip:** always include the version (`:v1`) when tagging your docker file.\nThis is important when fixing bugs, as Batch Nodes (VMs) will only pull down\na new copy of your code when the image name or version has changed\n"),Z=ee("\n# Pool Names\n\nCreate a new pool of Linux compute nodes using an Azure Virtual Machines\nMarketplace image. For more information about creating pools of Linux\nnodes, see: https://azure.microsoft.com/documentation/articles/batch-linux-nodes/\n\n```shell\naz vm list-skus --location westus2 --query \"[].{Name:name,vCPUs:capabilities[?name == 'vCPUs'] | [0].value, LowPriorityCapable:capabilities[?name == 'LowPriorityCapable'] | [0].value, MemoryGB:capabilities[?name == 'MemoryGB'] | [0].value } [?LowPriorityCapable == 'True']\" --output table\n```\n"),V=ee("# SuperBatch\n\n_The fastest way to get up and running with Azure Batch_\n\n## TL;DR\n\nAzure Batch can speed up your long running jobs by orders of magnitude, but\nconverting your code to run in Azure Batch requires a bit of configuration.\nThis package aims to get you up and running in minutes, and institutes some\nbest practices too.\n\n## Azure Batch\n\nAnytime you have code that can be divided into independent chunks, Azure\nBatch can orchestrate the execution of those tasks a pool of 100's of workers\nnodes (VMs) -- reducing your execution time by orders of magnitude. However,\nto leverage azure batch, you'll need to:\n\n* Create some Azure resources including:\n  * An Azure Batch instance\n  * An Azure Storage Account\n  * An Azure Container Registry (Optional)\n* Bundle your worker code with it's dependencies and store it in the cloud\n* Store input (*Resource*) files in the cloud\n* Define the Individual tasks and upload them to Azure Batch\n* Download the results from each task\n* Aggregate the task results to and produce your final output\n\nIf this sounds intimidating, this package is here to help you get to your\npython - _or any other code_ - up and running in Azure Batch with as little\npain as possible.\n\n## Requirements\n\nIn order to leverage Azure Batch using SuperBatch, you'll need:\n\n* The [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) installed, in order to interact with the Azure cloud\n* The [Docker CLI](https://docs.docker.com/install/) installed, in order to bundle your code and push it to a registry\n* The SuperBatch package, which can be installed via:\n\n```shell\npip install git+https://github.com/jdthorpe/batch-config.git\n```\n\n## Getting Started\n\nFollow along in the tutorial, or clone the\n[super-batch-starter](https://github.com/jdthorpe/super-batch-starter) and\nreplace the starter code with yours\n"),J=ee('# The Task Worker\n\nThe job of the task worker is to execute a single task in a computing\nenvironment prepared by Azure Batch. Specifically, Azure Batch is responsible\nfor (1) preparing any code dependencies (2) loading data (*resources files*)\ninto the working directory (3) executing your code, and (4) retrieving the outputs.\n\n## File Naming\n\nFor convenience, we\'ll create a special module containing the names of the\nresource and output files which is shared between the controller and\nworker modules.\n\n```python\n# ./constants.py\n# The global parameters file\nGLOBAL_CONFIG_FILE = "config.pickle"\n\n# names of the input (resource) and output files as they will\n# appear in the task environment:\nTASK_RESOURCE_FILE = "resource.pickle"\nTASK_OUTPUT_FILE = "output.pickle"\n\n# names of the input (resource) and output files as they will\n# appear on our local machine and in blob storage:\nLOCAL_RESOURCE_PATTERN = "task_{}_resource.pickle"\nLOCAL_OUTPUT_PATTERN = "task_{}_output.pickle"\n```\n\n*Aside: In this example we\'ll be passing python pickle files between the\ncontroller and worker, because both the worker and the controller are\nwritten in python.  While the SuperBatch helper scripts are written in Python,\nthis package can be used to automate work which gets done in any language.\nDocker images exist for a great variety of languages, and using a worker\nfrom another language stack simply requires changing the files written and\nread from python `.pickle`s to something more language agnostic, such as\ncsv, yaml, json, or feather (to name a few).*\n\n## Worker code\n\nWith the task code and file names separated out into their own modules, the\nworker - which is responsible for reading in the resource files, executing\nthe task, and writing the output to disk - is entirely boilerplate code:\n\n```python\n# ./worker.py\nimport joblib\nfrom constants import GLOBAL_CONFIG_FILE, TASK_INPUTS_FILE, TASK_OUTPUTS_FILE\nfrom task import task\n\n# Read the designated global config and iteration parameter files\nglobal_config = joblib.load(GLOBAL_CONFIG_FILE)\nparameters = joblib.load(TASK_INPUTS_FILE)\n\n# Do the actual work\nresult = task(global_config, parameters)\n\n# Write the results to the designated output file\njoblib.dump(result, TASK_OUTPUTS_FILE)\n\n```\n\n**A note about imports:** Because the worker (`worker.py`) and the task\n(`task.py`) modules are loaded into the root of the docker container, which\nis also (conveniently) the working directory when python is executed,\n`task.py` can (and should) be imported with out a leading \'.\' as it will also\nbe on the Python path at runtime\n\n## Next up\n\nWe\'ll bundle the worker and it\'s dependencies into a docker file and publish\nit in a private Azure Container Registry\n'),Q=Object(u.a)((function(e){return Object(y.a)({root:{"& p code":{backgroundColor:"#cadceb",padding:"0.125rem",paddingLeft:"0.2rem",paddingRight:"0.2rem",borderRadius:"0.125rem"}}})})),X=function(e){var n=Q();return r.a.createElement("div",{className:n.root},r.a.createElement(U.a,Object.assign({},e,{plugins:[Y.a]})))};function ee(e){return function(){return Object(a.useEffect)((function(){return A.a.highlightAll()}),[]),r.a.createElement(X,{source:e,escapeHtml:!1})}}var ne=Object(u.a)((function(e){return Object(y.a)({root:{"& p code":{backgroundColor:"#cadceb",padding:"0.125rem",paddingLeft:"0.2rem",paddingRight:"0.2rem",borderRadius:"0.125rem"}}})}));var te=function(){var e=r.a.useState(0),n=Object(s.a)(e,2),t=n[0],a=n[1],o=ne();return r.a.createElement("div",{className:o.root},r.a.createElement(X,{source:"\n# Creating Azure Resources\n\nAfter logging into the console with `az login` (and potentially setting the default\nsubscription with `az account set -s <subscription>`), you'll need to create a\nresource group into which the batch account is created. In addition, the\nazure batch service requires a storage account which is used to keep track of\ndetails of the jobs and tasks.\n\nAlthough the resource group, storage account and batch account could have\ndifferent names, for sake of exposition, we'll give them all the same name\nand locate them in the US West 2 region. Since we're using the `name` for\nparameter for the resource group, storage account and batch account, it must\nconsist of 3-24 lower case, letters and be unique across all of azure\n"}),r.a.createElement(G,{value:t,setValue:a}),r.a.createElement(X,{source:"**Best Practice Tip**: Use a dedicated resource group for your Azure Batch\nresources.  This ensures that you can delete all the azure resources when\nyou are done with a single command ([az rg delete](https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az-group-delete) or via the [portal](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resources-portal#delete-resources)) in order to avoid\nunnecessary charges to your Azure subscription when you have finished with your\nbatch jobs.\n"}),r.a.createElement(X,{source:"\n## Gather Resource Credentials\n\nIn order to execute tasks in Azure batch, credentials for each of the\nrequired Azure resources (e.g. azure batch, storage, and optionally the azure\ncontainer registry) need to be acquired. The strategy employed in this demo\nis to log in to the Azure CLI (`az login`) and export the necessary\ncredentials as environment variables. This allows writing credential free\ncode and letting the Azure CLI handle the Authentication and Authorization.\n\nAfter exporting these credentials, the code in `controller.py` is executed\nin the same terminal session, and `super_batch` can use them to access the\nrequired Azure resources.\n"}),r.a.createElement(D,{value:t,setValue:a}),r.a.createElement(X,{source:"\n## Using Azure Container Registry\n\nIf you wish to use a private Azure Container Registry, use the following code to\ncreate an ACR instance and the export the required credentials:\n"}),r.a.createElement(P,{value:t,setValue:a}))},ae=t(243),re=t(247),oe=t(238),ie=t(4),se=t(33),ce=Object(u.a)((function(e){return Object(y.a)({drawer:{backgroundColor:"#49494d",color:"#e6e6eb",paddingLeft:".8rem",paddingTop:".8rem",height:"100%","& a":{color:"inherit","text-decoration":"none",outline:"none"}},item:{fontSize:13,padding:e.spacing(.5,0,.5,1),borderLeft:"4px solid transparent",boxSizing:"content-box","&:hover":{borderLeft:"4px solid ".concat("light"===e.palette.type?e.palette.grey[200]:e.palette.grey[900])}},itemSecondary:{paddingLeft:"1.6rem"},ul:{padding:0,margin:0,listStyle:"none",textDecoration:"none"},nested:{paddingLeft:e.spacing(4)},link:{textDecoration:"none"}})})),le=[["Create Azure Resources","/create-resources"],["Refactoring your Code","/refactoring"],["The Task Worker","/worker"],["Build the Docker Image","/building-with-docker"],["The Controller","/controller"],["Clean Up","/cleanup"]];function ue(){var e=ce(),n=r.a.useState(!0),t=Object(s.a)(n,2),a=t[0],o=t[1];return r.a.createElement("div",{className:e.drawer},r.a.createElement(g.a,{component:"ul","aria-labelledby":"nested-list-subheader",className:e.ul},r.a.createElement(se.b,{to:"/",className:e.link,style:{textDecoration:"none",color:"inherit"}},r.a.createElement("li",{className:"active ".concat(e.item)},r.a.createElement(re.a,{primary:"Overview"}))),r.a.createElement("li",{className:e.item,onClick:function(){o(!a)}},r.a.createElement(re.a,{primary:"Tutorial"})),r.a.createElement(oe.a,{in:a,timeout:"auto",unmountOnExit:!0},r.a.createElement("ul",{className:e.ul},le.map((function(n){var t=Object(s.a)(n,2),a=t[0],o=t[1];return r.a.createElement(se.b,{to:o,key:o},r.a.createElement("li",{className:Object(ie.a)(e.item,e.itemSecondary),key:o},a))})))),r.a.createElement(se.b,{to:"/faq"},r.a.createElement("li",{className:e.item},r.a.createElement(re.a,{primary:"FAQ"}))),r.a.createElement(se.b,{to:"/api"},r.a.createElement("li",{className:e.item},r.a.createElement(re.a,{primary:"API"})))))}var he=t(11),de=Object(u.a)((function(e){return Object(y.a)({nav:Object(c.a)({},e.breakpoints.up("sm"),{width:220,flexShrink:0}),drawer:{display:"flex",flexDirection:"column",height:"100%"},toolbar:e.mixins.toolbar,drawerPaper:{width:220,display:"block"}})}));function pe(e){var n=de(),t=Object(he.a)(),a=r.a.createElement("div",{className:n.drawer},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(ue,null));return r.a.createElement("nav",{className:n.nav,"aria-label":"mailbox folders"},r.a.createElement(d.a,{smUp:!0,implementation:"css"},r.a.createElement(ae.a,{variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:e.open,onClose:e.toggleOpen,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},a)),r.a.createElement(d.a,{xsDown:!0,implementation:"css"},r.a.createElement(ae.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},a)))}var me=t(241),ge=t(86),_e=t.n(ge),Ee=t(28),be=Object(l.a)({palette:{primary:{main:"#44a2ff"},secondary:{main:"#b068f7"}}}),fe=Object(u.a)((function(e){var n;return{root:{display:"flex"},menuButton:{color:"#eee",marginRight:e.spacing(2)},appBar:{zIndex:e.zIndex.drawer+1},toolbar:e.mixins.toolbar,toolbarOption:{marginLeft:"1rem"},logo:{color:"#f5c816"},main:(n={"& pre":{overflowX:"auto"}},Object(c.a)(n,e.breakpoints.up("sm"),{width:"calc(100vw - ".concat(220,"px)")}),Object(c.a)(n,e.breakpoints.down("xs"),{width:"100vw"}),Object(c.a)(n,"flexGrow",1),Object(c.a)(n,"padding","2rem"),Object(c.a)(n,"paddingTop","0"),Object(c.a)(n,"textAlign","left"),n)}}));var Ae=function(){var e=fe(),n=Object(a.useState)(!1),t=Object(s.a)(n,2),o=t[0],i=t[1],c=function(){i(!o)};return r.a.createElement(se.a,{basename:"/super-batch-docs"},r.a.createElement("div",{className:e.root},r.a.createElement(pe,{open:o,toggleOpen:c}),r.a.createElement(m.a,null),r.a.createElement(h.a,{theme:be},r.a.createElement(p.a,{position:"fixed",className:e.appBar},r.a.createElement(d.a,{xsDown:!0,implementation:"css"},r.a.createElement(b.a,{href:"//github.com/microsoft/simplify-docx",target:"_blank",position:"right",color:"black"},"Fork me on GitHub")),r.a.createElement(_.a,null,r.a.createElement(d.a,{smUp:!0,implementation:"css"},r.a.createElement(me.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:c,className:e.menuButton},r.a.createElement(_e.a,{fontSize:"large"}))),r.a.createElement(g.a,{variant:"h4",noWrap:!0,className:e.logo},"SuperBatch"))),r.a.createElement("div",{className:e.main},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(Ee.c,null,r.a.createElement(Ee.a,{exact:!0,path:"/api"}," ",r.a.createElement(q,null)),r.a.createElement(Ee.a,{exact:!0,path:"/create-resources"}," ",r.a.createElement(te,null)),r.a.createElement(Ee.a,{exact:!0,path:"/cleanup"}," ",r.a.createElement(F,null)),r.a.createElement(Ee.a,{exact:!0,path:"/controller"}," ",r.a.createElement(W,null)),r.a.createElement(Ee.a,{exact:!0,path:"/refactoring"}," ",r.a.createElement(H,null)),r.a.createElement(Ee.a,{exact:!0,path:"/building-with-docker"}," ",r.a.createElement(K,null)),r.a.createElement(Ee.a,{exact:!0,path:"/"}," ",r.a.createElement(V,null)),r.a.createElement(Ee.a,{exact:!0,path:"/worker"}," ",r.a.createElement(J,null)),r.a.createElement(Ee.a,{exact:!0,path:"/faq"}," ",r.a.createElement(Z,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,n,t){e.exports=t(201)}},[[95,1,2]]]);
//# sourceMappingURL=main.527e5a0c.chunk.js.map