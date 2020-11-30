<template>
    <el-container class="create-task-group">
        <TasksList />
        <el-main>
            <h3>Create New Task Group</h3>
            <el-form label-position="top" label-width="80px" :model="form">
                <el-form-item label="Task Name" class="task-name">
                    <el-input v-model="form.name" placeholder="Input Name"></el-input>
                </el-form-item>
                <el-form-item label="Store" class="item-select">
                    <el-select v-model="form.store" placeholder="Select Store">
                        <el-option value="Nike AE">Nike AE</el-option>
                        <el-option value="Nike AU">Nike AU</el-option>
                        <el-option value="Nike CA">Nike CA</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Size" class="item-select">
                    <el-select v-model="form.size" placeholder="Select Size">
                        <el-option value="size group 1">size group 1</el-option>
                        <el-option value="size group 2">size group 2</el-option>
                        <el-divider></el-divider>
                        <el-option value="Random">Random</el-option>
                        <el-divider></el-divider>
                        <el-option value="5.5">5.5</el-option>
                        <el-option value="6.0">6.0</el-option>
                        <el-option value="6.5">6.5</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Sku/Kws" class="task-sku">
                    <el-input v-model="form.sku" placeholder="Sku/Kws"></el-input>
                </el-form-item>
                <el-form-item label="Profile" class="item-select">
                    <el-select v-model="form.profile" placeholder="Select Profile"></el-select>
                </el-form-item>
                <el-form-item label="Proxies" class="item-select">
                    <el-select v-model="form.proxies" placeholder="Select Proxies"></el-select>
                </el-form-item>
                <el-form-item prop="type" class="item-checkbox-group">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="Account" name="Account"></el-checkbox>
                        <el-checkbox label="Discount" name="Discount"></el-checkbox>
                        <el-checkbox label="Check Live" name="Check"></el-checkbox>
                        <el-checkbox label="Scraper" name="Scraper"></el-checkbox>
                        <el-checkbox label="Max Cart" name="Max"></el-checkbox>
                        <el-checkbox label="Safe" name="Safe"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item class="item-number">
                    <el-input-number :min="0" v-model="form.num" :step="1"></el-input-number>
                </el-form-item>
                <el-form-item class="item-select btn">
                    <el-button plain>Create</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
import TasksList from './components/TasksList'
export default {
    name: 'CreateTaskGroup',
    components: {
        TasksList
    },
    data() {
        return {
            form: {
                name: '',
                store: '',
                size: '',
                type: [],
                num: 0
            }
        }
    }
}
</script>
