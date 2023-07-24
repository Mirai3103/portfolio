
from zipfile import ZipFile
import paramiko
from dotenv import load_dotenv
load_dotenv()
import os
ssh = paramiko.SSHClient()
keyfilename = os.getenv("SSH_PRIVATE_KEY_PATH")
password = os.getenv("SSH_PASSWORD")
username = os.getenv("SSH_USERNAME")
host = os.getenv("SSH_HOST")
k = paramiko.RSAKey.from_private_key_file(keyfilename, password=password)
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname=host, username=username, pkey=k)
os.system("yarn build")
ssh.exec_command("cd public_html && rm -rf ./*")

with ZipFile("build.zip", "w") as zipObj:
    for folderName, subfolders, filenames in os.walk("dist"):
        for filename in filenames:
            filePath = os.path.join(folderName, filename)
            zipObj.write(filePath)


fpt_client = ssh.open_sftp()
fpt_client.put("build.zip", "public_html/build.zip")
fpt_client.close()
ssh.exec_command("cd public_html && unzip build.zip && rm build.zip")
ssh.exec_command("cd public_html && mv dist/* . && rm -rf dist")
ssh.close()
os.remove("build.zip")
