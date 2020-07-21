let teamList = new Vue({
  el: "#root",
  data: {
    names: ["Rahmat", "Fachri", "Yazid", "Rendy", "Willy", "Nabil"],
    newMemberName: "",
  },
  methods: {
    addNewMember: function () {
      this.names.push(this.newMemberName);
      this.newMemberName = "";
    },
  },
});

let counter = new Vue({
  el: "#counter",
  data: {
    count: 0,
  },
  methods: {
    incrementCount: function () {
      this.count += 1;
    },
    decrementCount: function () {
      this.count -= 1;
    },
  },
});
