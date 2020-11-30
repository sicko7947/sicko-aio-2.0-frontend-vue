<template>
    <el-main class="profiles-group-wrapper">
        <h3>Profiles Group（5 Total）</h3>
        <div class="search-box">
            <el-select v-model="profiles" placeholder="choose" class="profiles-select left">
                <el-option value="Account">Account </el-option>
                <el-option value="test1">test1 </el-option>
                <el-option value="test2">test2 </el-option>
                <el-option value="test3">test3 </el-option>
            </el-select>
            <button class="btn-submit left" @click="dialogVisable = true">Add Group</button>
            <button class="btn-submit right">Export <i class="iconfont">&#xe61d;</i></button>
            <button class="btn-submit right">Import <i class="iconfont">&#xe61c;</i></button>
        </div>
        <div class="account-list list-box">
            <div class="list-header">
                <span>#</span>
                <span>Name</span>
                <span>Email</span>
                <span>Country</span>
                <span>Action</span>
            </div>
            <div class="list-body">
                <div class="list-item">
                    <span>1</span>
                    <span>Group</span>
                    <span>Multi Email</span>
                    <span>USA</span>
                    <span>
                        <i class="iconfont">&#xe616;</i>
                        <i class="iconfont">&#xe61b;</i>
                        <i class="iconfont">&#xe617;</i>
                    </span>
                </div>
                <div class="list-item">
                    <span>2</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>23</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>24</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>25</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>26</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>27</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>28</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>28</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>28</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
                <div class="list-item">
                    <span>28</span>
                    <span>11111</span>
                    <span>Sicko666</span>
                    <span>failed</span>
                    <span>
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                        <i class="el-icon-document-copy"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <button class="btn-submit" @click="dialogComfirmVisable = true">Clear All</button>
            <button class="btn-submit" @click="dialogProfilesVisable = true">Add Profiles</button>
        </div>

        <el-dialog :visible.sync="dialogComfirmVisable" class="clear-comfirm" :show-close="false">
            <p>Clear All Accounts?</p>
            <span slot="footer" class="dialog-footer">
                <button class="btn-submit">Yes</button>
                <button class="btn-submit" @click="dialogComfirmVisable = false">No</button>
            </span>
        </el-dialog>

        <el-dialog title="New Profile Group" :visible.sync="dialogVisable" class="dialog-new-group dialog-middle">
            <div>
                <el-input v-model="profileForm.name" placeholder="Group Name"></el-input>
                <el-select v-model="profileForm.profile" multiple placeholder="Profiles">
                    <el-option value="Account">Account </el-option>
                    <el-option value="test1">test1 </el-option>
                    <el-option value="test2">test2 </el-option>
                    <el-option value="test3">test3 </el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                <button class="btn-submit">Save</button>
            </span>
        </el-dialog>

        <el-dialog title="Add New Profile" :visible.sync="dialogProfilesVisable" class="dialog-new-profile">
            <div class="form-box">
                <el-form ref="shipForm" :model="shipForm" label-position="top" label-width="80px">
                    <el-form-item label="Shipping Address">
                        <el-input v-model="shipForm.firstName" placeholder="First Name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="shipForm.lastName" placeholder="last Name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="shipForm.proxy" placeholder="Proxy">
                            <el-option value="US">US </el-option>
                            <el-option value="CN">CN </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="shipForm.city" placeholder="City"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="shipForm.address1" placeholder="Address 1"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="shipForm.address2" placeholder="Address 2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="shipForm.country" placeholder="Country/Address"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="shipForm.zipCode" placeholder="Zip Code"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="shipForm.state" placeholder="State">
                            <el-option value="US">US </el-option>
                            <el-option value="CN">CN </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="shipForm.phone" placeholder="Phone Number"></el-input>
                    </el-form-item>
                </el-form>
                <el-form ref="billForm" :model="billForm" label-position="top" label-width="80px">
                    <el-form-item label="Billing Address">
                        <el-input v-model="billForm.firstName" placeholder="First Name"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input v-model="billForm.lastName" placeholder="last Name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="billForm.proxy" placeholder="Proxy">
                            <el-option value="US">US </el-option>
                            <el-option value="CN">CN </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="billForm.city" placeholder="City"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="billForm.address1" placeholder="Address 1"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="billForm.address2" placeholder="Address 2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="billForm.country" placeholder="Country/Address"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="billForm.zipCode" placeholder="Zip Code"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="billForm.state" placeholder="State">
                            <el-option value="US">US </el-option>
                            <el-option value="CN">CN </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="billForm.phone" placeholder="Phone Number"></el-input>
                    </el-form-item>
                </el-form>
                <el-form ref="paymentForm" :model="paymentForm" label-position="top" label-width="80px">
                    <el-form-item label="Payment Type">
                        <el-input v-model="paymentForm.name" placeholder="Profile Name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="paymentForm.email" placeholder="Email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="paymentForm.type" placeholder="Card Type">
                            <el-option value="aliPay">AliPay </el-option>
                            <el-option value="wechat">Wechat </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="card-expiry">
                        <el-input v-model="paymentForm.expiry" placeholder="Expiry"></el-input>
                        <el-input v-model="paymentForm.cvv" placeholder="CVV"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="paymentForm.cardName" placeholder="Card Name"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <el-checkbox v-model="sameShipping">Same as Shipping</el-checkbox>
            <span slot="footer" class="dialog-footer">
                <button class="btn-submit">Save</button>
            </span>
        </el-dialog>
    </el-main>
</template>

<script>
export default {
    name: 'Profiles',
    data() {
        return {
            profiles: '',
            profileForm: {
                name: '',
                profile: ''
            },
            shipForm: {},
            billForm: {},
            paymentForm: {
                type: ''
            },
            dialogComfirmVisable: false,
            dialogVisable: false,
            dialogProfilesVisable: false,
            sameShipping: false
        }
    }
}
</script>
