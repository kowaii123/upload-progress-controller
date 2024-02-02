<template>
    <el-upload
        :accept="accept"
        :before-upload="handleBeforeUpload"
        :disabled="disabled"
        :http-request="handleHttpRequest"
        :show-file-list="false"
        action=""
        class="upload"
    >
        <slot name="uploader-btn">
            <el-button size="small" type="primary">点击上传</el-button>
        </slot>
    </el-upload>
</template>
<script>
import axios from 'axios'
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
        requestData: {
            type: Function
        }
    },
    data() {
        return {}
    },
    methods: {
        handleHttpRequest(file) {
            let data = ''
            if (this.requestData && typeof this.requestData === 'function') {
                data = this.requestData(file)
            } else {
                data = new FormData()
                data.append('file', file)
            }
            // for (const key of data.keys()) {
            //     console.log(key)
            //     console.log(data.get(key))
            // }
            // console.log(data.keys())
            // data.keys().forEach(key => {
            //     console.log(key, data.get(key))
            // })
            axios
                .post(this.url, data, {
                    headers: this.requestHeader,
                    onUploadProgress: progressEvent => {
                        this.$emit('progress', progressEvent)
                    }
                })
                .then(res => {
                    this.$emit('success', res)
                })
                .catch(err => {
                    this.$emit('error', err)
                })
        },
        handleBeforeUpload(file) {
            if (this.beforeUpload && typeof this.beforeUpload === 'function') {
                this.beforeUpload(file)
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped></style>
