describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", "removeFromParent", "traverse", and a property named "value", and "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.traverse).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it("child should have parent property of parent",function(){
    tree.addChild(5);
    tree.addChild(7);
    expect(tree.children[0].parent).to.equal(tree);
    expect(tree.children[1].parent).to.equal(tree);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should detach children from their parents when "removeFromParent" is called', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    var check = tree.children[0];
    expect(tree.contains(5)).to.equal(true);
    expect(tree.contains(7)).to.equal(true);
    check.removeFromParent();
    expect(tree.contains(5)).to.equal(false);
    expect(tree.contains(7)).to.equal(false);
    expect(check.parent).to.equal(null);
  });

  it('should execute a callback on all nodes upon calling traverse', function () {
    var sum = 0;
    var test = function (item) {

      if (item.value !== undefined) {
        sum += item.value;
      }
    }
    tree.addChild(5);
    tree.addChild(8);
    tree.addChild(3);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(test);
    expect(sum).to.equal(37);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
