# todomanager
#require node.js to be already installed.
  if not installed, download from this 'https://nodejs.org/en/' and install node.js
#To install meteor and dependencies of project.
  try:
      run command 'npm install -g meteor.
  except:
      run this command in power shell cmd promt=> '@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin""
  run command 'meteor' after installing to check the working of meteor.
  run command 'meteor add react-meteor-data'  to provide an integration between React and Tracker, Meteor's reactive data system.
  run command 'meteor add accounts-password' to add the accounts-password to enable username and password authentication.
  run command 'meteor npm install --save bcrypt'  to avoid a warning saying that you are using pure-Javascript implementation of it.
  run command 'meteor remove insecure' to remove insecure package, because as the name suggests it is insecure.
  run command 'meteor remove autopublish' to remove autopublish package, which automatically synchronizes all the database contents to the client.
#Require Git to be already installed.
  if not installed, download from this 'https://git-scm.com/download' and setup.
#Set up todomanager codebase
  1)cd to /meteor_proj. If it doesn't exist, create a folder with name 'meteor_proj'
  2)clone our Git repository — git clone https://github.com/dilipkumarmanavalla/todomanager.git
#Run the code
  1)open command promt terminal and run command 'meteor run' or simply 'meteor' directed to path at which the code get cloned.
  if not working or any port error run command 'meteor run --port 4321' to run this code on 'port:4321'.
 