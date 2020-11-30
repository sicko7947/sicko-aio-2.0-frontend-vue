<template>
    <el-main class="account-detail-wrapper">
        <div class="breadcrumb">
            <i class="el-icon-arrow-left"></i>
            <p>CN Accounts（20 Total）</p>
        </div>
        <div class="account-list list-box">
            <div class="list-header">
                <span>#</span>
                <span>Account</span>
                <span>Password</span>
                <span>Token</span>
                <span>Action</span>
            </div>
            <div class="list-body">
                <div class="list-item">
                    <span>1</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>Retrived</span>
                    <span>
                        <i class="el-icon-refresh-right"></i>
                        <i class="el-icon-delete"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>2</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-refresh-right"></i>
                        <i class="el-icon-delete"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <button class="btn-submit" @click="dialogComfirmVisable = true">Clear All</button>
            <button class="btn-submit" @click="dialogVisable = true">Add New</button>
            <button class="btn-submit">Get All Token</button>
        </div>
        <el-dialog title="Add New Accounts" :visible.sync="dialogVisable" class="dialog-new-accout">
            <el-input type="textarea" :rows="10" placeholder="Account: Password" v-model="account"> </el-input>
            <span slot="footer" class="dialog-footer">
                <button class="btn-submit">Save</button>
            </span>
        </el-dialog>
        <el-dialog :visible.sync="dialogComfirmVisable" class="clear-comfirm" :show-close="false">
            <p>Clear All Accounts?</p>
            <span slot="footer" class="dialog-footer">
                <button class="btn-submit">Yes</button>
                <button class="btn-submit" @click="dialogComfirmVisable = false">No</button>
            </span>
        </el-dialog>
    </el-main>
</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {
            dialogVisable: false,
            dialogComfirmVisable: false,
            account: ''
        }
    }
}
</script>
