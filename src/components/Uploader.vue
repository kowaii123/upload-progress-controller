<template>
    <div class="container">
        <div class="kowaii-uploader">
            <el-upload
                :accept="accept"
                :action="url"
                :before-upload="handleBeforeUpload"
                :data="extraData"
                :disabled="disabled"
                :headers="requestHeader"
                :limit="uploadLimit"
                :multiple="isMulti"
                :name="name"
                :on-change="handleChange"
                :on-error="handleError"
                :on-progress="handleProgress"
                :on-success="handleSuccess"
                :show-file-list="false"
                :with-credentials="true"
                class="upload"
            >
                <slot name="uploader-btn">
                    <el-button size="small" type="primary">点击上传</el-button>
                </slot>
            </el-upload>
        </div>
        <div class="kowaii-progress">
            <div v-if="isVisible && showProgressBar" class="kowaii-progress-container">
                <div class="kowaii-close-btn">
                    <i class="el-icon-close" @click="handleClose"></i>
                </div>
                <span v-if="true" :title="myFileName" class="kowaii-tooltip-text">{{ myFileName }}</span>
                <el-progress :percentage="myPercentage"
                             :status="myUploadStatus"
                             class="kowaii-progress-bar"></el-progress>
                <span v-if="true" class="kowaii-tooltip-hit">{{ myUploadStates }}</span>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-debugger */
//import axios from 'axios'

export default {
    name: 'kowaii-uploader',
    props: {
        url: {
            type: String,
            required: true
        },
        beforeUpload: {
            type: Function
        },
        accept: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        requestHeader: {
            type: Object,
            default: () => {
                return {
                    'Content-Type': 'multipart/form-data'
                }
            }
        },
        uploadLimit: {
            type: Number,
            default: 3
        },
        isMulti: {
            type: Boolean,
            default: false
        },
        showProgressBar: {
            type: Boolean,
            default: true
        },
        onProgress: {
            type: Function,
        },
        onSuccess: {
            type: Function,
        },
        onError: {
            type: Function,
        },
        name: {
            type: String,
        },
        extraData: {
            type: Object,
        }
    },
    data() {
        return {
            isVisible: false,
            myPercentage: 0,
            myUploadStates: "",
            myFileName: "",
            myUploadStatus: "",
        }
    },
    watch: {},
    methods: {
        handleBeforeUpload(file) {
            if (this.beforeUpload && typeof this.beforeUpload === 'function') {
                return this.beforeUpload(file).then(() => {
                    this.myPercentage = 0;
                    this.myUploadStates = "";
                    this.myUploadStatus = '';
                    this.isVisible = true
                }).catch(() => this.isVisible = false)
            } else {
                this.myPercentage = 0;
                this.myUploadStates = "";
                this.myUploadStatus = '';
                this.isVisible = true;
                return true
            }
        },
        handleChange(file, fileList) {
            this.$emit('change', file, fileList)
        },
        handleProgress(e, file) {
            if (this.onProgress && typeof this.onProgress === 'function') {
                this.onProgress(e, file);
                this.myPercentage = +(e.percent).toFixed(1);
                this.myUploadStates = '上传中';
                this.myFileName = file.name;
            } else {
                this.myPercentage = +(e.percent).toFixed(1);
                this.myUploadStates = '上传中';
                this.myFileName = file.name;
            }
        },
        handleSuccess(res, file) {
            if (this.onSuccess && typeof this.onSuccess === 'function') {
                this.onSuccess(res, file);
                this.myUploadStates = '上传成功';
                this.myUploadStatus = 'success';
            } else {
                this.myUploadStates = '上传成功';
                this.myUploadStatus = 'success';
            }
        },
        handleError(err, file) {
            if (this.onError && typeof this.onError === 'function') {
                this.onError(err, file)
            } else {
                this.myUploadStates = '上传失败';
                this.myUploadStatus = 'warning';
            }
        },
        handleClose() {
            this.isVisible = false;
            this.myFileName = "";
            this.myPercentage = 0;
            this.myUploadStates = "";
            this.myUploadStatus = "";
        }
    }
}
</script>

<style scoped>
.kowaii-progress {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.kowaii-progress-container {
    width: 300px;
    height: 110px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.kowaii-close-btn {
    float: right;
    cursor: pointer;
    height: 20px;
    width: 20px;
}

.kowaii-tooltip-text {
    display: block;
    height: 20px;
    width: 250px;
    margin-top: 18px;
    margin-left: 10px;
    line-height: 20px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.kowaii-tooltip-hit {
    display: block;
    height: 20px;
    width: 60px;
    margin-top: 10px;
    margin-left: 10px;
    line-height: 20px;
    font-size: 12px;
}

.kowaii-progress-bar {
    margin-top: 10px;
    margin-left: 10px;
    width: 290px;
}
</style>
