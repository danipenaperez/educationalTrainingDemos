#!/bin/bash
#Further docs at https://hub.docker.com/_/httpd
ACTION=$1
if [ "$ACTION" = "" ] ; then
	ACTION="help"
fi




case $ACTION in
	"local-new-start")
		PORT=8888
		if [ "$3" != "" ] ; then
			PORT=$3
		fi
		echo "** Served current directory on http://localhost:$PORT"
		echo "** Press Crtl+C to stop the server and exit"
		echo $3
		echo " "
		docker run --rm=true --name tecmint-web -p $PORT:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
		;;
    "help" )
        echo '*******************'
        echo '** Available Commands:'
		echo "1.[local-new-start] = Serve current directory as static server on localhost:{specifiedPort|8888(default)} . Example [$TOOL_EXEC_ALIAS_NAME static-server local-new-start {empty|desired_port_number} ]"
		echo '*******************'
		;;
	* )
		echo "Command not found for certificates features: $ACTION "

    ;;
esac

