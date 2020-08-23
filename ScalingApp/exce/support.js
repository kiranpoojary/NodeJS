/*exec − child_process.exec method runs a command in a shell/console and buffers the output.

spawn − child_process.spawn launches a new process with a given command.

fork − The child_process.fork method is a special case of the spawn() to create child processes.*/






/*
child_process.exec method runs a command in a shell and buffers the output. It has the following signature −
*/
console.log("Child Process " + process.argv[2] + " executed." );




/*
Parameters
Here is the description of the parameters used −

command (String) The command to run, with space-separated arguments

options (Object) may comprise one or more of the following options −

cwd (String) Current working directory of the child process

env (Object) Environment key-value pairs

encoding (String) (Default: 'utf8')

shell (String) Shell to execute the command with (Default: '/bin/sh' on UNIX, 'cmd.exe' on Windows, The shell should understand the -c switch on UNIX or /s /c on Windows. On Windows, command line parsing should be compatible with cmd.exe.)

timeout (Number) (Default: 0)

maxBuffer (Number) (Default: 200*1024)

killSignal (String) (Default: 'SIGTERM')

uid (Number) Sets the user identity of the process.

gid (Number) Sets the group identity of the process.

callback The function gets three arguments error, stdout, and stderr which are called with the output when the process terminates.

The exec() method returns a buffer with a max size and waits for the process to end and tries to return all the buffered data at once.*/