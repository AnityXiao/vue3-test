<template>
  <div>
    <p>登录页面</p>
    <el-form ref="formRef" :model="form" label-width="120px" :label-position="form.labelPosition" class="login_form"
      :rules="rules" status-icon :inline="true">
      <el-form-item label="Label position" class="item_width">
        <el-radio-group v-model="form.labelPosition">
          <el-radio-button label="left">Left</el-radio-button>
          <el-radio-button label="right">Right</el-radio-button>
          <el-radio-button label="top">Top</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="User name" class="item_width" prop="userName">
        <el-input v-model="form.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="User password" class="item_width" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" autocomplete="off" @input="checkPassword3(form.password)">
        </el-input>
        <!-- 强度圆点 -->
        <span class="weak" :class="{'mezzo': strength == '中', 'doughty':strength=='强'}" v-if="form.password"></span>
        <span v-if="form.password">{{strength}}</span>
      </el-form-item>
      <el-form-item label="User Confirm" class="item_width" prop="checkPass">
        <el-input v-model="form.checkPass" placeholder="请再次确认密码" type="password" autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const formRef = ref({})
// 表单数据
const form = reactive({
  labelPosition: 'right',
  userName: '',
  password: '',
  checkPass: '',
})
// 密码强度
var strength = ref('')
// 表单验证规则
const verifyPass = (rule, value, callback) => {
  if (value === '') {
    callback('请输入密码')
  } else {
    if (form.checkPass !== '') {
      if (!formRef.value) return
      formRef.value.validateField('checkPass', () => null)
    }
  }
}
const verifyCheckPass = (rule, value, callback) => {
  if (value === '') {
    callback('请再次输入密码')
  } else if (value !== form.password) {
    callback('密码不一致，请重新输入')
  } else {
    callback()
  }
}
const rules = reactive({
  password: [{ validator: verifyPass, triggle: 'blur' }],
  checkPass: [{ validator: verifyCheckPass, triggle: 'blur' }]
})
//密码强度校验
function checkPassword3(val) {
  /*
   返回密码的包含的种类
   */
  function checkStrong(sPW) {
    if (sPW.length < 6 || sPW.length > 18)
      return 0; //密码太短或太长
    let Modes = 0;
    let modeList = []
    for (let i = 0;i < sPW.length;i++) {
      //测试每一个字符的类别并统计一共有多少种模式.
      Modes = CharMode(sPW.charCodeAt(i));
      modeList.push(Modes)
    }
    // 去重
    return Array.from(new Set(modeList))
  }
  /*
   判断字符类型
   */
  function CharMode(iN) {
    if (iN >= 48 && iN <= 57) //数字
      return 1;
    if (iN >= 65 && iN <= 90) //大写字母
      return 2;
    if (iN >= 97 && iN <= 122) //小写
      return 4;
    else
      return 8; //特殊字符
  }
  /**
   * 密码强度等级说明，字符包括：小写字母、大写字母、数字、特殊字符
   * 1---密码包含其中之一
   * 2---密码包含其中之二
   * 3---密码包含其中之三;
   * 4---密码包含其中之四
   */
  let kind = checkStrong(val) == 0 ? 0 : checkStrong(val).length
  // console.log('val', val)
  // console.log('种类', kind)
  switch (kind) {
    case 0:
      strength.value = '密码长度不符合要求'
      break;
    case 1:
      strength.value = "弱"
      break;
    case 2:
      strength.value = "中"
      break;
    case 3:
      strength.value = "强"
      break;
    case 4:
      strength.value = "强"
      break;
  }
}
//取消
function cancel() { }
// 提交
function submit() { }
</script>
<style lang="scss" scoped>
@import "../../style/mixin.scss";
.login_form {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  .item_width {
    width: 400px;
  }
  .weak {
    content: "";
    display: inline-block;
    margin-right: 6px;
    vertical-align: middle;
    @include circle(10px, #f7130b);
  }
  .mezzo {
    background: #ffa800;
  }
  .doughty {
    background: #23f507;
  }
}
</style>
