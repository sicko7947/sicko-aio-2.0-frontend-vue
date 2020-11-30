<template>
    <el-container class="create-task">
        <TasksList />
        <el-main>
            <div class="header">
                <h3>Nike US</h3>
                <p>task 1</p>
                <i class="iconfont">&#xe616;</i>
                <i class="iconfont">&#xe617;</i>
                <i class="iconfont">&#xe618;</i>
            </div>
            <div class="info">
                <el-form :model="form" label-width="5.5rem">
                    <el-form-item label="Sku/Kws">
                        <el-input v-model="form.sku" placeholder="11111-222222"></el-input>
                    </el-form-item>
                    <el-form-item label="Monitor Delay" label-width="7.8125rem">
                        <el-input v-model="form.monitor" placeholder="2000"></el-input>
                    </el-form-item>
                    <el-form-item label="Proxy">
                        <el-select v-model="form.proxy" placeholder="DC">
                            <el-option label="US" value="US"></el-option>
                            <el-option label="CN" value="CN"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Retry Delay" label-width="7.8125rem">
                        <el-input v-model="form.retry" placeholder="2000"></el-input>
                    </el-form-item>
                    <el-form-item label="Size">
                        <el-select v-model="form.size" placeholder="DC">
                            <el-option label="US" value="US"></el-option>
                            <el-option label="CN" value="CN"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Retry  Limit" label-width="7.8125rem">
                        <el-select v-model="form.limit" placeholder="5">
                            <el-option label="6" value="6"></el-option>
                            <el-option label="7" value="7"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-checkbox-group v-model="form.type" class="item-checkbox-group">
                    <el-checkbox label="Account" name="Account"></el-checkbox>
                    <el-checkbox label="Discount" name="Discount"></el-checkbox>
                    <el-checkbox label="Check Live" name="Check"></el-checkbox>
                    <el-checkbox label="Scraper" name="Scraper"></el-checkbox>
                    <el-checkbox label="Max Cart" name="Max"></el-checkbox>
                    <el-checkbox label="Safe" name="Safe"></el-checkbox>
                </el-checkbox-group>
                <img src="@/assets/img/logo.jpg" alt="name" />
            </div>
            <div class="btn-group">
                <button class="btn-submit">Save</button>
                <button class="btn-submit btn-pick">Stop</button>
                <button class="btn-submit btn-blue">Add</button>
            </div>
            <div class="list-box">
                <div class="list-header">
                    <span>Product</span>
                    <span>Size</span>
                    <span>Profile</span>
                    <span>Status</span>
                    <span>Action</span>
                </div>
                <div class="list-body">
                    <div class="list-item">
                        <span>Crateful Dead Bears x Nike SB Dunk Low</span>
                        <span>12.0</span>
                        <span>Sicko</span>
                        <span>starting...</span>
                        <span>
                            <i class="iconfont">&#xe619;</i>
                            <i class="iconfont">&#xe61b;</i>
                        </span>
                    </div>
                    <div class="list-item">
                        <span>Crateful Dead Bears x Nike SB Dunk Low</span>
                        <span>12.0</span>
                        <span>Sicko</span>
                        <span>starting...</span>
                        <span>
                            <i class="iconfont">&#xe619;</i>
                            <i class="iconfont">&#xe61b;</i>
                        </span>
                    </div>
                    <div class="list-item list-item-success ">
                        <span>Crateful Dead Bears x Nike SB Dunk Low</span>
                        <span>12.0</span>
                        <span>Sicko</span>
                        <span>Success</span>
                        <span>
                            <i class="iconfont">&#xe619;</i>
                            <i class="iconfont">&#xe61b;</i>
                        </span>
                    </div>
                    <div class="list-item list-item-wran ">
                        <span>Crateful Dead Bears x Nike SB Dunk Low</span>
                        <span>12.0</span>
                        <span>Sicko</span>
                        <span>Stop</span>
                        <span>
                            <i class="iconfont">&#xe61a;</i>
                            <i class="iconfont">&#xe61b;</i>
                        </span>
                    </div>
                    <div class="list-item list-item-error ">
                        <span>Crateful Dead Bears x Nike SB Dunk Low</span>
                        <span>12.0</span>
                        <span>Sicko</span>
                        <span>Error:404 internal</span>
                        <span>
                            <i class="iconfont">&#xe619;</i>
                            <i class="iconfont">&#xe61b;</i>
                        </span>
                    </div>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import TasksList from './components/TasksList'
export default {
    name: 'CreateTask',
    components: {
        TasksList
    },
    data() {
        return {
            form: {
                type: []
            }
        }
    }
}
</script>
