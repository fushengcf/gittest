import Vue from "vue";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import utc from "dayjs/plugin/utc";

dayjs.locale("zh-cn");
dayjs.extend(utc);

Vue.filter("prettyDate", dateString => {
  return dayjs
    .utc(dateString)
    .local()
    .format("YYYY年MM月DD日 HH:mm:ss");
});
