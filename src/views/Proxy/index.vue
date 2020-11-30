<template>
    <div style="height:100%">
        <Header />
        <el-container class="proxy-wrapper">
            <Aside />
            <el-main>
                <div class="search-box">
                    <el-select v-model="profiles" placeholder="choose" class="left">
                        <el-option value="Account">Account </el-option>
                        <el-option value="test1">test1 </el-option>
                        <el-option value="test2">test2 </el-option>
                        <el-option value="test3">test3 </el-option>
                    </el-select>
                    <button class="btn-submit left" @click="dialogListVisable = true">Add New List</button>
                    <i class="iconfont left" @click="dialogRenameVisable = true">&#xe616;</i>
                    <i class="iconfont left">&#xe61b;</i>
                    <el-select v-model="Stroe" placeholder="choose" class="right">
                        <el-option value="Account">Account </el-option>
                        <el-option value="test1">test1 </el-option>
                        <el-option value="test2">test2 </el-option>
                        <el-option value="test3">test3 </el-option>
                    </el-select>
                </div>
                <div class="list-box">
                    <div class="list-header">
                        <span>IP</span>
                        <span>Port</span>
                        <span>Username</span>
                        <span>Password</span>
                        <span>Store</span>
                        <span>Status</span>
                        <span>Action</span>
                    </div>
                    <div class="list-body">
                        <div class="list-item">
                            <span>192.168.1.1</span>
                            <span>1111</span>
                            <span>Sicko666</span>
                            <span>Sicko666</span>
                            <span>NIKE</span>
                            <span class="success">10ms</span>
                            <span>
                                <i class="iconfont">&#xe620;</i>
                                <i class="iconfont">&#xe61b;</i>
                            </span>
                        </div>
                        <div class="list-item">
                            <span>192.168.1.1</span>
                            <span>1111</span>
                            <span>Sicko666</span>
                            <span>Sicko666</span>
                            <span>NIKE</span>
                            <span class="error">1000ms</span>
                            <span>
                                <i class="el-icon-orange"></i>
                                <i class="el-icon-delete"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <button class="btn-submit left" @click="dialogComfirmVisable = true">Clear All</button>
                    <button class="btn-submit left" @click="dialogProxyVisable = true">Add New Proxy</button>
                    <button class="btn-submit right" @click="dialogProfilesVisable = true">Remove Dead</button>
                    <button class="btn-submit right" @click="dialogProfilesVisable = true">Test All</button>
                </div>
            </el-main>
            <el-dialog :visible.sync="dialogComfirmVisable" class="clear-comfirm" :show-close="false">
                <p>Clear All Accounts?</p>
                <span slot="footer" class="dialog-footer">
                    <button class="btn-submit">Yes</button>
                    <button class="btn-submit" @click="dialogComfirmVisable = false">No</button>
                </span>
            </el-dialog>

            <el-dialog
                title="Add New Proxy List"
                :visible.sync="dialogListVisable"
                class="dialog-new-proxy-list dialog-middle"
            >
                <el-input v-model="newProxy"> </el-input>
                <span slot="footer" class="dialog-footer">
                    <button>Save</button>
                </span>
            </el-dialog>
            <el-dialog
                title="Renaming This Proxy List"
                :visible.sync="dialogRenameVisable"
                class="dialog-new-proxy-list dialog-middle"
            >
                <el-input v-model="newName"> </el-input>
                <span slot="footer" class="dialog-footer">
                    <button>Save</button>
                </span>
            </el-dialog>

            <el-dialog title="Add New Proxy" :visible.sync="dialogProxyVisable" class="dialog-new-proxy">
                <el-input type="textarea" :rows="10" placeholder="Ip:Port:Username:Password" v-model="proxy">
                </el-input>
                <span slot="footer" class="dialog-footer">
                    <button class="btn-submit">Save</button>
                </span>
            </el-dialog>
        </el-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/SearchHeader.vue'
import Aside from '../Dashboard/components/Aside.vue'
export default Vue.extend({
    name: 'proxyMain',
    components: {
        Header,
        Aside
    },
    data() {
        return {
            profiles: '',
            Stroe: '',
            dialogComfirmVisable: false,
            dialogListVisable: false,
            newProxy: '',
            dialogRenameVisable: false,
            newName: '',
            dialogProxyVisable: false,
            proxy: ''
        }
    },
    mounted() {
        // new proxy need new list
        //first click need to show comfirm dialog  //todo add
    }
})
</script>

<style lang="scss">
@import '@/assets/proxy.scss';
</style>
