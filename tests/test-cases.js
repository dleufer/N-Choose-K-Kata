tests({

  // Fill this in with your test cases

  '3 choose 3': function() {
    eq(1, n_choose_k(3,3));
  },
  '3 choose 2': function() {
    eq(3, n_choose_k(3,2));
  },
  '3 choose 1': function() {
    eq(3, n_choose_k(3,1));
  },
  '3 choose 0': function() {
    eq(1, n_choose_k(3,0));
  },
  // one or both are less than 0
  'n is less than 0': function() {
    eq(undefined, n_choose_k(-1,3));
  },
  'n is less than 0': function() {
    eq(undefined, n_choose_k(3,-1));
  },
  'n & k are less than 0': function() {
    eq(undefined, n_choose_k(-3,-3));
  },
  'both are greater than 0': function() {
    eq(4, n_choose_k(4,3));
  },

  // k is greater than n
  'k is greater than n': function() {
    eq(undefined, n_choose_k(3,8));
  },
  'k is greater than n': function() {
    eq(undefined, n_choose_k(8,9));
  },

  // 0 <= k <= n PUT IN ANSWERS
  '10 choose 3': function() {
    eq("?", n_choose_k(10,3));
  },
  '4 choose 0': function() {
    eq("?", n_choose_k(4,0));
  },

});
