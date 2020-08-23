/*exec − child_process.exec method runs a command in a shell/console and buffers the output.

spawn − child_process.spawn launches a new process with a given command.

fork − The child_process.fork method is a special case of the spawn() to create child processes.*/


/*child_process.fork method is a special case of spawn() to create Node processes. It has the following signature −
*/

console.log("Child Process " + process.argv[2] + " executed." );



/*
Parameters
Here is the description of the parameters used −

modulePath (String) The module to run in the child.

args (Array) List of string arguments

options (Object) may comprise one or more of the following options −

cwd (String) Current working directory of the child process.

env (Object) Environment key-value pairs.

execPath (String) Executable used to create the child process.

execArgv (Array) List of string arguments passed to the executable (Default: process.execArgv).

silent (Boolean) If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the "pipe" and "inherit" options for spawn()'s stdio for more details (default is false).

uid (Number) Sets the user identity of the process.

gid (Number) Sets the group identity of the process.

The fork method returns an object with a built-in communication channel in addition to having all the methods in a normal ChildProcess instance.*/