<template>
  <div class="container">
    <div class="create-article">
      <el-form :model="form" ref="form" :rules="rules" label-position="top" label-width="100px">
        <el-form-item label="文章标题" prop="title">
          <el-col>
            <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <Editor
            v-model="form.content"
            refName="wangEditor"
            editorContent="content"
            @editorChange="_setContent"
          ></Editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="_submit('form')">确 定</el-button>
          <el-button @click="_reset">重 置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Editor from "./WangEditor";
import { addArticle } from "@/api";
export default {
  name: "createArticle",
  data() {
    return {
      form: {
        title: "",
        content: "",
        attachment_id: []
      },
      rules: {
        title: [
          { required: true, message: "文章标题不能为空！", trigger: "blur" }
        ],
        content: [
          { required: true, message: "文章内容不能为空！", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    Editor
  },
  methods: {
    _setContent(params) {
      for (let [key, val] of Object.entries(params)) {
        if (key == "attachment_id") {
          this.form[key].push(val);
        } else {
          this.form[key] = val;
        }
      }
    },
    _submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { title, content, attachment_id } = this.form;
          addArticle({
            title: title,
            content: content,
            img_id: attachment_id.join(",")
          }).then(
            res => {
              if (res.status) {
                this.$message({
                  message: res.msg,
                  type: "success"
                });
                this.$router.push("/");
              } else {
                this.$message.error(res.msg);
              }
            },
            err => {
              console.log(err);
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    _reset() {}
  }
};
</script>

<style scoped>
.create-article {
  margin-top: 20px;
}
</style>
