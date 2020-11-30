<template>
    <div style="height:100%">
        <Header />
        <el-container class="setting-wrapper">
            <Aside />
            <el-main>
                <div class="header">
                    <h3>Setting</h3>
                    <button class="btn-submit" @click="dialogCookieVisable = true">Cookie Jar</button>
                </div>
                <div class="discoard">
                    <h5>Discoard Webhook</h5>
                    <div>
                        <el-input v-model="discoardWebhook"></el-input>
                        <button class="btn-submit">Test</button>
                    </div>
                </div>
                <div class="client">
                    <div>
                        <h3>Client Management</h3>
                        <button class="btn-submit btn-green">Check For Update</button>
                        <button class="btn-submit btn-pick">Deactivate</button>
                    </div>
                    <div>
                        <h3>Client Version</h3>
                        <p>Your Key Will Be Valid For Another 58 Days.</p>
                        <button class="btn-submit btn-blue">Renew Subscription(3 months)</button>
                        <button class="btn-submit btn-yellow" @click="dialogSizeVisable = true">Size Group</button>
                    </div>
                </div>
                <p class="count">Amount：12</p>
            </el-main>
        </el-container>

        <el-dialog title="Cookie Jar" :visible.sync="dialogCookieVisable" class="dialog-cookie">
            <p>Status: <span>Idle</span></p>
            <p>Cookie: <span>0</span></p>
            <span slot="footer" class="dialog-footer">
                <button>Clear</button>
                <button>Save</button>
            </span>
        </el-dialog>
        <el-dialog title="Size Group" :visible.sync="dialogSizeVisable" class="dialog-size">
            <div class="size-list-operation">
                <el-select v-model="sizeForm.list" placeholder="Size Group List">
                    <el-option value="Account">Account </el-option>
                    <el-option value="test1">test1 </el-option>
                    <el-option value="test2">test2 </el-option>
                    <el-option value="test3">test3 </el-option>
                </el-select>
                <i class="el-icon-delete"></i>
                <i class="el-icon-plus"></i>
            </div>
            <el-input v-model="sizeForm.name" placeholder="Size Group Name"></el-input>
            <p>Select Size</p>
            <el-select v-model="sizeForm.size" multiple placeholder="Sizes">
                <el-option value="Account">Account </el-option>
                <el-option value="test1">test1 </el-option>
                <el-option value="test2">test2 </el-option>
                <el-option value="test3">test3 </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
                <button>Save</button>
            </span>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/SearchHeader.vue'
import Aside from '../Dashboard/components/Aside.vue'
export default Vue.extend({
    name: 'Setting',
    components: {
        Header,
        Aside
    },
    data() {
        return {
            discoardWebhook: '',
            dialogCookieVisable: false,
            dialogSizeVisable: false,
            sizeForm: {
                list: '',
                name: '',
                size: []
            }
        }
    }
})
</script>

<style lang="scss">
@import '@/assets/setting.scss';
</style>
