<template>
    <el-main class="account-wrapper">
        <h3>Account</h3>
        <el-select v-model="value" placeholder="choose" class="account-select">
            <el-option value="Account">Account </el-option>
            <el-option value="test1">test1 </el-option>
            <el-option value="test2">test2 </el-option>
            <el-option value="test3">test3 </el-option>
        </el-select>
        <el-container class="card-box">
            <el-card>
                <div class="info">
                    <h4>US Accounts</h4>
                    <p class="accounts-num">12</p>
                    <el-link :underline="false">Click To Edit</el-link>
                </div>
                <img src="@/assets/img/us.jpeg" />
            </el-card>
            <el-card>
                <div class="info">
                    <h4>CN Accounts</h4>
                    <p class="accounts-num">12</p>
                    <el-link :underline="false">Click To Edit</el-link>
                </div>
                <img src="@/assets/img/china.jpeg" />
            </el-card>
            <el-card>
                <div class="info">
                    <h4>US Accounts</h4>
                    <p class="accounts-num">12</p>
                    <el-link :underline="false">Click To Edit</el-link>
                </div>
                <img src="@/assets/img/us.jpeg" />
            </el-card>
            <el-card>
                <div class="info">
                    <h4>CN Accounts</h4>
                    <p class="accounts-num">12</p>
                    <el-link :underline="false">Click To Edit</el-link>
                </div>
                <img src="@/assets/img/china.jpeg" />
            </el-card>
        </el-container>
        <button class="clear-btn">Clear All</button>

        <el-dialog :visible.sync="dialogComfirmVisable" class="clear-comfirm" :show-close="false">
            <p>Clear All Four Regions’ Accounts?</p>
            <span slot="footer" class="dialog-footer">
                <button class="btn-submit">Yes</button>
                <button class="btn-submit">No</button>
            </span>
        </el-dialog>
    </el-main>
</template>

<script>
export default {
    name: 'Account',
    data() {
        return {
            value: '',
            dialogComfirmVisable: false
        }
    }
}
</script>
