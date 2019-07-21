import userForm from  '@/graphql/user.js'

const columns=[
    {
       prop:"users",
       label:"用户编号",
       slot:"users" 
    },
   
]

export default {
    ...userForm,
    dataPath:"users",
    columns,
    hasDelete:false,
    hasView:true,
    hasNew:false,
    // searchForm:[
    //     {
    //         $id:"cellphone",
    //         label:"电话号码"
    //     }
    // ],
    form: [
        // {
        //   $id: "avatar",
        //   label: "头像",
        //   component: Avatar
        // },
        {
          $type: "input",
          $id: "name",
          label: "用户昵称",
          $el: {
            placeholder: "请输入用户昵称"
          },
          rules: [
            {
              required: true,
              message: "请输入用户昵称",
              trigger: "blur"
            }
          ]
        },
        {
          $type: "input",
          $id: "cellphone",
          label: "手机号码",
          $el: {
            placeholder: "请输入手机号码"
          },
          rules: [
            {
              required: true,
              message: "请输入手机号码",
              trigger: "blur"
            }
          ]
        },
        {
          $type: "input",
          $id: "role",
          label: "权限",
          $el: {
            disabled: true
          },
          inputFormat: val => {
            var newval;
            if (val.role == "manager") {
              newval = "管理员";
            } else {
              newval = "用户";
            }
            return newval;
          }
        }
      ],
      beforeConfirm(data) {
        delete data.role;
        return Promise.resolve();
      }
    };
    