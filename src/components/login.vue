<template>
   <div class="bgc">
        <div class="login-box">
                <el-form :model="loginfrom" :rules="rules" ref="loginfrom" label-width="100px" class="demo-loginfrom">
                    <el-form-item label="账号" prop="username">
                        <el-input v-model="loginfrom.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="loginfrom.password" type="password"></el-input>
                    </el-form-item>
        
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginfrom')">登录</el-button>
                        <el-button @click="resetForm('loginfrom')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                loginfrom: {
                    username: 'admin',
                    password: '123456'
                },
                rules: {
                    username: [{
                            required: true,
                            message: '请输入账号',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 8,
                            message: '长度在 3 到 8 个字符',
                            trigger: 'blur'
                        }
                    ],
                    password: [{
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 8,
                            message: '长度在 3 到 8 个字符',
                            trigger: 'blur'
                        }
                    ],

                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                    this.$message.success('登录成功!')
                    this.$router.push({path:"/index"})
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
.login-box{width: 350px;height: 250px;margin: 100px auto ;background-color: cadetblue;box-shadow: 2px;display: flex;justify-content: center;align-items: center;box-sizing: border-box;padding:30px ;}
.demo-loginfrom{width:100%;height: 100%;margin-left: -80px;}
.bgc{position: fixed;top: 0;right: 0;left: 0;bottom: 0;background-color: burlywood;}
</style>