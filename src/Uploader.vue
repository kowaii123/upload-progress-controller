<template>
    <el-upload
        :accept="accept"
        :before-upload="handleBeforeUpload"
        :disabled="disabled"
        :http-request="handleHttpRequest"
        :limit="limit"
        :multiple="isMultiple"
        :show-file-list="false"
        action=""
        class="upload">
        <slot>
            <el-button size="small" type="primary">点击上传</el-button>
        </slot>
    </el-upload>
</template>
<script>
import KowaiiProgressBar from "./ProgressBar.vue";
import axios from 'axios';

export default {
    name: 'kowaii-uploader',
    components: {KowaiiProgressBar},
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        URL: {
            type: String,
            default: ''
        },
        upload: {
            type: Function,
        },
        beforeUpload: {
            type: Function,
        },
        accept: {
            type: String,
            default: ''
        },
        isMultiple: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: 1
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
            type: Function,
        }
    },
    data() {
        return {}
    },
    methods: {
        handleHttpRequest(file) {
            let data = "";
            if (this.requestData && typeof this.requestData === 'function') {
                data = this.requestData(file)
            } else {
                data = new FormData();
                data.append('file', file);
            }
            axios.post(this.URL, data, {
                headers: this.requestHeader,
                onUploadProgress: (progressEvent) => {
                    this.$emit('progress', progressEvent);
                }
            }).then((res) => {
                this.$emit('success', res);
            }).catch((err) => {
                this.$emit('error', err);
            });
        },
        handleBeforeUpload(file) {
            if (this.beforeUpload && typeof this.beforeUpload === 'function') {
                this.beforeUpload(file)
            } else {
                return true
            }
        },
    }
}
</script>

<style scoped>
</style>
