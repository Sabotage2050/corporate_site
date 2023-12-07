const Example = () => {
  return (
    // 現在在庫がないことを表示するメッセージ
    <div className="my-8">
      <div className=" grid grid-cols-3 gap-4">
        <div className="col-span-3 text-center text-2xl font-serif">
          Currently not in stock
        </div>
      </div>
    </div>
  );
};

export default Example;
