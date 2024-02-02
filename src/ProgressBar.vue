<template>
    <div v-if="isVisible" class="kowaii-progress-container">
        <div class="kowaii-close-btn">
            <i class="el-icon-close" @click="isVisible = false"></i>
        </div>
        <span v-if="fileName" class="kowaii-tooltip-text">{{ myFileName }}</span>
        <el-progress :percentage="myPercentage" class="kowaii-progress-bar"></el-progress>
        <span v-if="uploadStates" class="kowaii-tooltip-hit">{{ myUploadStates }}</span>
    </div>
</template>
<script>
export default {
    name: 'kowaii-progress-bar',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        percentage: {
            type: Number,
            default: 0
        },
        fileName: {
            type: String,
        },
        uploadStates: {
            type: String,
        }
    },
    data() {
        return {
            isVisible: this.visible,
            myPercentage: this.percentage,
            myUploadStates: this.uploadStates,
            myFileName: this.fileName,
        }
    },
    watch: {
        visible(val) {
            this.isVisible = val;
        },
        percentage(val) {
            this.myPercentage = val;
        },
        uploadStates(val) {
            this.myUploadStates = val;
        },
        fileName(val) {
            this.myFileName = val;
        }
    }
}
</script>
<style>
.kowaii-progress-container {
    width: 300px;
    height: 110px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
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
    width: 160px;
    margin-top: 18px;
    margin-left: 10px;
    line-height: 20px;
    font-size: 16px;
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
    font-size: 14px;
}

.kowaii-progress-bar {
    margin-top: 10px;
    margin-left: 10px;
    width: 280px;
}
</style>
