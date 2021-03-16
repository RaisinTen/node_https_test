#!/bin/bash

export NODE_EXTRA_CA_CERTS="$PWD/cert.pem"

node index.js
