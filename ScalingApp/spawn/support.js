/*exec − child_process.exec method runs a command in a shell/console and buffers the output.

spawn − child_process.spawn launches a new process with a given command.

fork − The child_process.fork method is a special case of the spawn() to create child processes.*/



//console.log("Child Process " + process.argv[2] + " executed." );

console.log("Child Process " + process.argv[2] + " executed." );


/*
command (String) The command to run

args (Array) List of string arguments

options (Object) may comprise one or more of the following options −

cwd (String) Current working directory of the child process.

env (Object) Environment key-value pairs.

stdio (Array) String Child's stdio configuration.

customFds (Array) Deprecated File descriptors for the child to use for stdio.

detached (Boolean) The child will be a process group leader.

uid (Number) Sets the user identity of the process.

gid (Number) Sets the group identity of the process.*/