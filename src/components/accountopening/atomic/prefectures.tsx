import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const Prefectures = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const prefectures = registerinfo.address.prefectures;
  const { selectarea } = mystyles();
  const handleChange = (e) => {
    console.log(e);
  };

  const todohuken = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];

  const menus = todohuken.map((elm) => (
    <MenuItem key={elm} value={elm}>
      {elm}
    </MenuItem>
  ));

  return (
    <FormControl className={selectarea}>
      <InputLabel id="prefectures-select-helper-label">都道府県</InputLabel>
      <Select
        labelId="prefectures-select"
        id="prefectures-select"
        value={prefectures}
        onChange={handleChange}
        disabled={isConfirmMode}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="">
          <em>選択してください</em>
        </MenuItem>
        {menus}
      </Select>
    </FormControl>
  );
};
