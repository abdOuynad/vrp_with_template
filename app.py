from flask import Flask,jsonify
from web_api import create_app
from xmlrpc.client import ServerProxy
#
app=create_app()
#
if __name__=='__main__':
    #
    app.run(host="0.0.0.0",port=5000)
