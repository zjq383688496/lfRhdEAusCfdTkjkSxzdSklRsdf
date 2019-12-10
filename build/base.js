'use strict';

const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const utils = require('./utils')
const config = require('../config')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })