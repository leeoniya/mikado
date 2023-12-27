<h1>Benchmark of Template Rendering</h1>

Run the benchmark (recycle):<br>
<a href="https://raw.githack.com/nextapps-de/mikado/master/bench/">https://raw.githack.com/nextapps-de/mikado/master/bench/</a><br>

Run the benchmark (keyed):<br>
<a href="https://raw.githack.com/nextapps-de/mikado/master/bench/#keyed">https://raw.githack.com/nextapps-de/mikado/master/bench/#keyed</a><br>

Run the benchmark (internal/data-driven):<br>
<a href="https://raw.githack.com/nextapps-de/mikado/master/bench/#internal">https://raw.githack.com/nextapps-de/mikado/master/bench/#internal</a><br>

There are 3 kinds of test scenarios:

<table>
    <tr>
        <td>1.&nbsp;recycle</td>
        <td>In this mode all existing nodes could be reused (recycling nodes). This mode has no restrictions.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>2.&nbsp;keyed</td>
        <td>In this mode just existing nodes with the same key (ID) are allowed to be reused. Re-arrangement / reconcile is a rare implemented but also strong feature which is explicitly covered by the test "order".</td>
    </tr>
    <tr></tr>
    <tr>
        <td>3.&nbsp;data-driven</td>
        <td>This mode runs through the same internal pool of data (same references, no new data from external or by creation) and compares the performance gain of data-driven libraries. Especially the test "update" and "repaint" covers the strength of this mode. This mode has no restrictions.</td>
    </tr>
</table>

Whether a library provides optimizations to one of these modes or not, it is fair to compare each of them in a different scenario.

When the option "keep best run" is enabled it will replace the better result with the old one (separately for each test). When disabled, it will summarize the results for each test.

#### Keyed

<table>
    <tr></tr>
    <tr>
        <td><sub>Library</sub></td>
        <td align=center><sub>KB</sub></td>
        <td align=center><sub>RAM</sub></td>
        <td align=center><sub>Create</sub></td>
        <td align=center><sub>Replace</sub></td>
        <td align=center><sub>Update</sub></td>
        <td align=center><sub>Order</sub></td>
        <td align=center><sub>Repaint</sub></td>
        <td align=center><sub>Add</sub></td>
        <td align=center><sub>Remove</sub></td>
        <td align=center><sub>Toggle</sub></td>
        <td align=center><sub>Clear</sub></td>
        <td align=center><sub>Index</sub></td>
        <td align=center><sub>Score</sub></td>
    </tr>
    <tr>
        <td><sub>mikado</sub></td>
        <td align=right><sub>3</sub></td>
        <td align=right><sub>22</sub></td>
        <td align=right><sub>19301</sub></td>
        <td align=right><sub>8535</sub></td>
        <td align=right><sub>206747</sub></td>
        <td align=right><sub>51470</sub></td>
        <td align=right><sub>220010</sub></td>
        <td align=right><sub>35346</sub></td>
        <td align=right><sub>27945</sub></td>
        <td align=right><sub>31265</sub></td>
        <td align=right><sub>26378</sub></td>
        <td align=right><b><sub>996</sub></b></td>
        <td align=right><b><sub>54089</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>mikado-proxy</sub></td>
        <td align=right><sub>8.3</sub></td>
        <td align=right><sub>30</sub></td>
        <td align=right><sub>10288</sub></td>
        <td align=right><sub>5901</sub></td>
        <td align=right><sub>27129</sub></td>
        <td align=right><sub>18648</sub></td>
        <td align=right><sub>28194</sub></td>
        <td align=right><sub>14912</sub></td>
        <td align=right><sub>19278</sub></td>
        <td align=right><sub>16526</sub></td>
        <td align=right><sub>26216</sub></td>
        <td align=right><b><sub>537</sub></b></td>
        <td align=right><b><sub>12803</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>solid</sub></td>
        <td align=right><sub>0</sub></td>
        <td align=right><sub>339</sub></td>
        <td align=right><sub>737</sub></td>
        <td align=right><sub>665</sub></td>
        <td align=right><sub>7291</sub></td>
        <td align=right><sub>4029</sub></td>
        <td align=right><sub>13279</sub></td>
        <td align=right><sub>1391</sub></td>
        <td align=right><sub>7487</sub></td>
        <td align=right><sub>2470</sub></td>
        <td align=right><sub>15227</sub></td>
        <td align=right><b><sub>149</sub></b></td>
        <td align=right><b><sub>3587</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>inferno</sub></td>
        <td align=right><sub>8.4</sub></td>
        <td align=right><sub>311</sub></td>
        <td align=right><sub>754</sub></td>
        <td align=right><sub>724</sub></td>
        <td align=right><sub>5493</sub></td>
        <td align=right><sub>5266</sub></td>
        <td align=right><sub>6055</sub></td>
        <td align=right><sub>1323</sub></td>
        <td align=right><sub>7443</sub></td>
        <td align=right><sub>2302</sub></td>
        <td align=right><sub>15982</sub></td>
        <td align=right><b><sub>191</sub></b></td>
        <td align=right><b><sub>2647</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>mithril</sub></td>
        <td align=right><sub>9.6</sub></td>
        <td align=right><sub>263</sub></td>
        <td align=right><sub>637</sub></td>
        <td align=right><sub>612</sub></td>
        <td align=right><sub>4599</sub></td>
        <td align=right><sub>4267</sub></td>
        <td align=right><sub>4997</sub></td>
        <td align=right><sub>1120</sub></td>
        <td align=right><sub>6614</sub></td>
        <td align=right><sub>2004</sub></td>
        <td align=right><sub>12622</sub></td>
        <td align=right><b><sub>170</sub></b></td>
        <td align=right><b><sub>2256</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>redom</sub></td>
        <td align=right><sub>2.9</sub></td>
        <td align=right><sub>522</sub></td>
        <td align=right><sub>421</sub></td>
        <td align=right><sub>411</sub></td>
        <td align=right><sub>4146</sub></td>
        <td align=right><sub>3719</sub></td>
        <td align=right><sub>4215</sub></td>
        <td align=right><sub>761</sub></td>
        <td align=right><sub>5750</sub></td>
        <td align=right><sub>1380</sub></td>
        <td align=right><sub>11744</sub></td>
        <td align=right><b><sub>190</sub></b></td>
        <td align=right><b><sub>1954</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>domc</sub></td>
        <td align=right><sub>4.5</sub></td>
        <td align=right><sub>393</sub></td>
        <td align=right><sub>1078</sub></td>
        <td align=right><sub>1059</sub></td>
        <td align=right><sub>1082</sub></td>
        <td align=right><sub>1129</sub></td>
        <td align=right><sub>1101</sub></td>
        <td align=right><sub>1128</sub></td>
        <td align=right><sub>2049</sub></td>
        <td align=right><sub>1464</sub></td>
        <td align=right><sub>24931</sub></td>
        <td align=right><b><sub>211</sub></b></td>
        <td align=right><b><sub>1250</sub></b></td>
    </tr>
    <tr>
        <td><sub>innerhtml</sub></td>
        <td align=right><sub>0</sub></td>
        <td align=right><sub>494</sub></td>
        <td align=right><sub>1029</sub></td>
        <td align=right><sub>999</sub></td>
        <td align=right><sub>993</sub></td>
        <td align=right><sub>876</sub></td>
        <td align=right><sub>885</sub></td>
        <td align=right><sub>935</sub></td>
        <td align=right><sub>1769</sub></td>
        <td align=right><sub>1186</sub></td>
        <td align=right><sub>27131</sub></td>
        <td align=right><b><sub>154</sub></b></td>
        <td align=right><b><sub>1107</sub></b></td>
    </tr>
    <tr>
        <td><sub>surplus</sub></td>
        <td align=right><sub>15.8</sub></td>
        <td align=right><sub>626</sub></td>
        <td align=right><sub>975</sub></td>
        <td align=right><sub>857</sub></td>
        <td align=right><sub>849</sub></td>
        <td align=right><sub>854</sub></td>
        <td align=right><sub>846</sub></td>
        <td align=right><sub>878</sub></td>
        <td align=right><sub>1560</sub></td>
        <td align=right><sub>1187</sub></td>
        <td align=right><sub>23713</sub></td>
        <td align=right><b><sub>162</sub></b></td>
        <td align=right><b><sub>987</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>sinuous</sub></td>
        <td align=right><sub>7.5</sub></td>
        <td align=right><sub>650</sub></td>
        <td align=right><sub>842</sub></td>
        <td align=right><sub>809</sub></td>
        <td align=right><sub>812</sub></td>
        <td align=right><sub>824</sub></td>
        <td align=right><sub>820</sub></td>
        <td align=right><sub>813</sub></td>
        <td align=right><sub>1577</sub></td>
        <td align=right><sub>1096</sub></td>
        <td align=right><sub>18047</sub></td>
        <td align=right><b><sub>159</sub></b></td>
        <td align=right><b><sub>941</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>jquery</sub></td>
        <td align=right><sub>31.3</sub></td>
        <td align=right><sub>684</sub></td>
        <td align=right><sub>809</sub></td>
        <td align=right><sub>707</sub></td>
        <td align=right><sub>703</sub></td>
        <td align=right><sub>643</sub></td>
        <td align=right><sub>652</sub></td>
        <td align=right><sub>698</sub></td>
        <td align=right><sub>1129</sub></td>
        <td align=right><sub>860</sub></td>
        <td align=right><sub>5520</sub></td>
        <td align=right><b><sub>84</sub></b></td>
        <td align=right><b><sub>708</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>lit-html</sub></td>
        <td align=right><sub>17.3</sub></td>
        <td align=right><sub>1179</sub></td>
        <td align=right><sub>441</sub></td>
        <td align=right><sub>411</sub></td>
        <td align=right><sub>409</sub></td>
        <td align=right><sub>413</sub></td>
        <td align=right><sub>409</sub></td>
        <td align=right><sub>431</sub></td>
        <td align=right><sub>761</sub></td>
        <td align=right><sub>550</sub></td>
        <td align=right><sub>4964</sub></td>
        <td align=right><b><sub>79</sub></b></td>
        <td align=right><b><sub>487</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>ractive</sub></td>
        <td align=right><sub>68.2</sub></td>
        <td align=right><sub>4684</sub></td>
        <td align=right><sub>165</sub></td>
        <td align=right><sub>156</sub></td>
        <td align=right><sub>158</sub></td>
        <td align=right><sub>158</sub></td>
        <td align=right><sub>159</sub></td>
        <td align=right><sub>166</sub></td>
        <td align=right><sub>298</sub></td>
        <td align=right><sub>212</sub></td>
        <td align=right><sub>1944</sub></td>
        <td align=right><b><sub>36</sub></b></td>
        <td align=right><b><sub>202</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>knockout</sub></td>
        <td align=right><sub>24.8</sub></td>
        <td align=right><sub>2657</sub></td>
        <td align=right><sub>91</sub></td>
        <td align=right><sub>67</sub></td>
        <td align=right><sub>68</sub></td>
        <td align=right><sub>68</sub></td>
        <td align=right><sub>68</sub></td>
        <td align=right><sub>84</sub></td>
        <td align=right><sub>130</sub></td>
        <td align=right><sub>103</sub></td>
        <td align=right><sub>1162</sub></td>
        <td align=right><b><sub>45</sub></b></td>
        <td align=right><b><sub>161</sub></b></td>
    </tr>
</table>

#### Non-Keyed (Recycle)

<table>
    <tr></tr>
    <tr>
        <td><sub>Library</sub></td>
        <td align=center><sub>KB</sub></td>
        <td align=center><sub>RAM</sub></td>
        <td align=center><sub>Create</sub></td>
        <td align=center><sub>Replace</sub></td>
        <td align=center><sub>Update</sub></td>
        <td align=center><sub>Order</sub></td>
        <td align=center><sub>Repaint</sub></td>
        <td align=center><sub>Add</sub></td>
        <td align=center><sub>Remove</sub></td>
        <td align=center><sub>Toggle</sub></td>
        <td align=center><sub>Clear</sub></td>
        <td align=center><sub>Index</sub></td>
        <td align=center><sub>Score</sub></td>
    </tr>
    <tr>
        <td><sub>mikado</sub></td>
        <td align=right><sub>3</sub></td>
        <td align=right><sub>12</sub></td>
        <td align=right><sub>19344</sub></td>
        <td align=right><sub>8611</sub></td>
        <td align=right><sub>205552</sub></td>
        <td align=right><sub>52497</sub></td>
        <td align=right><sub>243874</sub></td>
        <td align=right><sub>34405</sub></td>
        <td align=right><sub>27858</sub></td>
        <td align=right><sub>31847</sub></td>
        <td align=right><sub>26483</sub></td>
        <td align=right><b><sub>995</sub></b></td>
        <td align=right><b><sub>18276</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>mikado-proxy</sub></td>
        <td align=right><sub>8.3</sub></td>
        <td align=right><sub>43</sub></td>
        <td align=right><sub>10041</sub></td>
        <td align=right><sub>5782</sub></td>
        <td align=right><sub>24215</sub></td>
        <td align=right><sub>18201</sub></td>
        <td align=right><sub>24873</sub></td>
        <td align=right><sub>14302</sub></td>
        <td align=right><sub>19126</sub></td>
        <td align=right><sub>16517</sub></td>
        <td align=right><sub>25778</sub></td>
        <td align=right><b><sub>494</sub></b></td>
        <td align=right><b><sub>5927</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>domc</sub></td>
        <td align=right><sub>4.5</sub></td>
        <td align=right><sub>119</sub></td>
        <td align=right><sub>1142</sub></td>
        <td align=right><sub>6524</sub></td>
        <td align=right><sub>51753</sub></td>
        <td align=right><sub>11723</sub></td>
        <td align=right><sub>94361</sub></td>
        <td align=right><sub>2395</sub></td>
        <td align=right><sub>22497</sub></td>
        <td align=right><sub>4617</sub></td>
        <td align=right><sub>25167</sub></td>
        <td align=right><b><sub>431</sub></b></td>
        <td align=right><b><sub>4510</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>lit-html</sub></td>
        <td align=right><sub>17.3</sub></td>
        <td align=right><sub>359</sub></td>
        <td align=right><sub>446</sub></td>
        <td align=right><sub>4505</sub></td>
        <td align=right><sub>28027</sub></td>
        <td align=right><sub>8252</sub></td>
        <td align=right><sub>44001</sub></td>
        <td align=right><sub>897</sub></td>
        <td align=right><sub>8317</sub></td>
        <td align=right><sub>1645</sub></td>
        <td align=right><sub>5021</sub></td>
        <td align=right><b><sub>197</sub></b></td>
        <td align=right><b><sub>2220</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>solid</sub></td>
        <td align=right><sub>0</sub></td>
        <td align=right><sub>267</sub></td>
        <td align=right><sub>741</sub></td>
        <td align=right><sub>2196</sub></td>
        <td align=right><sub>6302</sub></td>
        <td align=right><sub>3223</sub></td>
        <td align=right><sub>13560</sub></td>
        <td align=right><sub>1346</sub></td>
        <td align=right><sub>8397</sub></td>
        <td align=right><sub>2452</sub></td>
        <td align=right><sub>14964</sub></td>
        <td align=right><b><sub>162</sub></b></td>
        <td align=right><b><sub>1320</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>inferno</sub></td>
        <td align=right><sub>8.4</sub></td>
        <td align=right><sub>283</sub></td>
        <td align=right><sub>761</sub></td>
        <td align=right><sub>750</sub></td>
        <td align=right><sub>5469</sub></td>
        <td align=right><sub>5000</sub></td>
        <td align=right><sub>5988</sub></td>
        <td align=right><sub>1363</sub></td>
        <td align=right><sub>7366</sub></td>
        <td align=right><sub>2345</sub></td>
        <td align=right><sub>16151</sub></td>
        <td align=right><b><sub>185</sub></b></td>
        <td align=right><b><sub>1122</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>mithril</sub></td>
        <td align=right><sub>9.6</sub></td>
        <td align=right><sub>244</sub></td>
        <td align=right><sub>645</sub></td>
        <td align=right><sub>2134</sub></td>
        <td align=right><sub>4636</sub></td>
        <td align=right><sub>3126</sub></td>
        <td align=right><sub>5039</sub></td>
        <td align=right><sub>1179</sub></td>
        <td align=right><sub>7191</sub></td>
        <td align=right><sub>2011</sub></td>
        <td align=right><sub>12604</sub></td>
        <td align=right><b><sub>179</sub></b></td>
        <td align=right><b><sub>1034</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>redom</sub></td>
        <td align=right><sub>2.9</sub></td>
        <td align=right><sub>355</sub></td>
        <td align=right><sub>448</sub></td>
        <td align=right><sub>2416</sub></td>
        <td align=right><sub>4184</sub></td>
        <td align=right><sub>3397</sub></td>
        <td align=right><sub>4554</sub></td>
        <td align=right><sub>874</sub></td>
        <td align=right><sub>6620</sub></td>
        <td align=right><sub>1530</sub></td>
        <td align=right><sub>12348</sub></td>
        <td align=right><b><sub>214</sub></b></td>
        <td align=right><b><sub>1005</sub></b></td>
    </tr>
    <tr>
        <td><sub>innerhtml</sub></td>
        <td align=right><sub>0</sub></td>
        <td align=right><sub>506</sub></td>
        <td align=right><sub>1059</sub></td>
        <td align=right><sub>1009</sub></td>
        <td align=right><sub>1018</sub></td>
        <td align=right><sub>890</sub></td>
        <td align=right><sub>883</sub></td>
        <td align=right><sub>901</sub></td>
        <td align=right><sub>1636</sub></td>
        <td align=right><sub>1186</sub></td>
        <td align=right><sub>27371</sub></td>
        <td align=right><b><sub>147</sub></b></td>
        <td align=right><b><sub>710</sub></b></td>
    </tr>
    <tr>
        <td><sub>surplus</sub></td>
        <td align=right><sub>15.8</sub></td>
        <td align=right><sub>581</sub></td>
        <td align=right><sub>955</sub></td>
        <td align=right><sub>831</sub></td>
        <td align=right><sub>835</sub></td>
        <td align=right><sub>835</sub></td>
        <td align=right><sub>845</sub></td>
        <td align=right><sub>939</sub></td>
        <td align=right><sub>1540</sub></td>
        <td align=right><sub>1155</sub></td>
        <td align=right><sub>25324</sub></td>
        <td align=right><b><sub>162</sub></b></td>
        <td align=right><b><sub>671</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>ractive</sub></td>
        <td align=right><sub>68.2</sub></td>
        <td align=right><sub>1182</sub></td>
        <td align=right><sub>164</sub></td>
        <td align=right><sub>1514</sub></td>
        <td align=right><sub>5826</sub></td>
        <td align=right><sub>2619</sub></td>
        <td align=right><sub>8082</sub></td>
        <td align=right><sub>336</sub></td>
        <td align=right><sub>2970</sub></td>
        <td align=right><sub>616</sub></td>
        <td align=right><sub>1768</sub></td>
        <td align=right><b><sub>73</sub></b></td>
        <td align=right><b><sub>608</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>sinuous</sub></td>
        <td align=right><sub>7.5</sub></td>
        <td align=right><sub>641</sub></td>
        <td align=right><sub>838</sub></td>
        <td align=right><sub>802</sub></td>
        <td align=right><sub>803</sub></td>
        <td align=right><sub>817</sub></td>
        <td align=right><sub>810</sub></td>
        <td align=right><sub>814</sub></td>
        <td align=right><sub>1609</sub></td>
        <td align=right><sub>1075</sub></td>
        <td align=right><sub>16384</sub></td>
        <td align=right><b><sub>148</sub></b></td>
        <td align=right><b><sub>614</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>jquery</sub></td>
        <td align=right><sub>31.3</sub></td>
        <td align=right><sub>687</sub></td>
        <td align=right><sub>822</sub></td>
        <td align=right><sub>720</sub></td>
        <td align=right><sub>716</sub></td>
        <td align=right><sub>653</sub></td>
        <td align=right><sub>657</sub></td>
        <td align=right><sub>708</sub></td>
        <td align=right><sub>1136</sub></td>
        <td align=right><sub>872</sub></td>
        <td align=right><sub>5531</sub></td>
        <td align=right><b><sub>79</sub></b></td>
        <td align=right><b><sub>454</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>knockout</sub></td>
        <td align=right><sub>24.8</sub></td>
        <td align=right><sub>2576</sub></td>
        <td align=right><sub>91</sub></td>
        <td align=right><sub>67</sub></td>
        <td align=right><sub>69</sub></td>
        <td align=right><sub>68</sub></td>
        <td align=right><sub>69</sub></td>
        <td align=right><sub>85</sub></td>
        <td align=right><sub>130</sub></td>
        <td align=right><sub>103</sub></td>
        <td align=right><sub>1181</sub></td>
        <td align=right><b><sub>43</sub></b></td>
        <td align=right><b><sub>130</sub></b></td>
    </tr>
</table>

#### Data-Driven (Internal)

<table>
    <tr></tr>
    <tr>
        <td><sub>Library</sub></td>
        <td align=center><sub>KB</sub></td>
        <td align=center><sub>RAM</sub></td>
        <td align=center><sub>Create</sub></td>
        <td align=center><sub>Replace</sub></td>
        <td align=center><sub>Update</sub></td>
        <td align=center><sub>Order</sub></td>
        <td align=center><sub>Repaint</sub></td>
        <td align=center><sub>Add</sub></td>
        <td align=center><sub>Remove</sub></td>
        <td align=center><sub>Toggle</sub></td>
        <td align=center><sub>Clear</sub></td>
        <td align=center><sub>Index</sub></td>
        <td align=center><sub>Score</sub></td>
    </tr>
    <tr>
        <td><sub>mikado-proxy</sub></td>
        <td align=right><sub>8.3</sub></td>
        <td align=right><sub>18</sub></td>
        <td align=right><sub>7350</sub></td>
        <td align=right><sub>2600</sub></td>
        <td align=right><sub>18467</sub></td>
        <td align=right><sub>11819</sub></td>
        <td align=right><sub>5601305</sub></td>
        <td align=right><sub>10254</sub></td>
        <td align=right><sub>23402</sub></td>
        <td align=right><sub>14499</sub></td>
        <td align=right><sub>18986</sub></td>
        <td align=right><b><sub>551</sub></b></td>
        <td align=right><b><sub>109601</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>mikado</sub></td>
        <td align=right><sub>3</sub></td>
        <td align=right><sub>15</sub></td>
        <td align=right><sub>18980</sub></td>
        <td align=right><sub>8374</sub></td>
        <td align=right><sub>78140</sub></td>
        <td align=right><sub>49034</sub></td>
        <td align=right><sub>260674</sub></td>
        <td align=right><sub>33723</sub></td>
        <td align=right><sub>27425</sub></td>
        <td align=right><sub>30768</sub></td>
        <td align=right><sub>25797</sub></td>
        <td align=right><b><sub>911</sub></b></td>
        <td align=right><b><sub>17362</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>sinuous</sub></td>
        <td align=right><sub>7.5</sub></td>
        <td align=right><sub>830</sub></td>
        <td align=right><sub>372</sub></td>
        <td align=right><sub>377</sub></td>
        <td align=right><sub>36533</sub></td>
        <td align=right><sub>38554</sub></td>
        <td align=right><sub>327320</sub></td>
        <td align=right><sub>757</sub></td>
        <td align=right><sub>13058</sub></td>
        <td align=right><sub>1529</sub></td>
        <td align=right><sub>12815</sub></td>
        <td align=right><b><sub>289</sub></b></td>
        <td align=right><b><sub>8431</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>domc</sub></td>
        <td align=right><sub>4.5</sub></td>
        <td align=right><sub>120</sub></td>
        <td align=right><sub>1045</sub></td>
        <td align=right><sub>4841</sub></td>
        <td align=right><sub>40118</sub></td>
        <td align=right><sub>8670</sub></td>
        <td align=right><sub>75694</sub></td>
        <td align=right><sub>2050</sub></td>
        <td align=right><sub>14914</sub></td>
        <td align=right><sub>3703</sub></td>
        <td align=right><sub>22609</sub></td>
        <td align=right><b><sub>373</sub></b></td>
        <td align=right><b><sub>4248</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>surplus</sub></td>
        <td align=right><sub>15.8</sub></td>
        <td align=right><sub>203</sub></td>
        <td align=right><sub>995</sub></td>
        <td align=right><sub>836</sub></td>
        <td align=right><sub>-failed-</sub></td>
        <td align=right><sub>22881</sub></td>
        <td align=right><sub>-failed-</sub></td>
        <td align=right><sub>1902</sub></td>
        <td align=right><sub>13561</sub></td>
        <td align=right><sub>3480</sub></td>
        <td align=right><sub>20871</sub></td>
        <td align=right><b><sub>311</sub></b></td>
        <td align=right><b><sub>2063</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>inferno</sub></td>
        <td align=right><sub>8.4</sub></td>
        <td align=right><sub>285</sub></td>
        <td align=right><sub>779</sub></td>
        <td align=right><sub>751</sub></td>
        <td align=right><sub>5303</sub></td>
        <td align=right><sub>4982</sub></td>
        <td align=right><sub>5901</sub></td>
        <td align=right><sub>1396</sub></td>
        <td align=right><sub>6100</sub></td>
        <td align=right><sub>2363</sub></td>
        <td align=right><sub>14419</sub></td>
        <td align=right><b><sub>184</sub></b></td>
        <td align=right><b><sub>1200</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>redom</sub></td>
        <td align=right><sub>2.9</sub></td>
        <td align=right><sub>1126</sub></td>
        <td align=right><sub>439</sub></td>
        <td align=right><sub>2425</sub></td>
        <td align=right><sub>4139</sub></td>
        <td align=right><sub>3386</sub></td>
        <td align=right><sub>4666</sub></td>
        <td align=right><sub>840</sub></td>
        <td align=right><sub>6389</sub></td>
        <td align=right><sub>1482</sub></td>
        <td align=right><sub>12790</sub></td>
        <td align=right><b><sub>214</sub></b></td>
        <td align=right><b><sub>1170</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>mithril</sub></td>
        <td align=right><sub>9.6</sub></td>
        <td align=right><sub>283</sub></td>
        <td align=right><sub>637</sub></td>
        <td align=right><sub>623</sub></td>
        <td align=right><sub>4517</sub></td>
        <td align=right><sub>4056</sub></td>
        <td align=right><sub>4858</sub></td>
        <td align=right><sub>1113</sub></td>
        <td align=right><sub>6664</sub></td>
        <td align=right><sub>1964</sub></td>
        <td align=right><sub>12248</sub></td>
        <td align=right><b><sub>168</sub></b></td>
        <td align=right><b><sub>1046</sub></b></td>
    </tr>
    <tr>
        <td><sub>innerHTML</sub></td>
        <td align=right><sub>0</sub></td>
        <td align=right><sub>505</sub></td>
        <td align=right><sub>1049</sub></td>
        <td align=right><sub>999</sub></td>
        <td align=right><sub>1003</sub></td>
        <td align=right><sub>871</sub></td>
        <td align=right><sub>874</sub></td>
        <td align=right><sub>875</sub></td>
        <td align=right><sub>1675</sub></td>
        <td align=right><sub>1167</sub></td>
        <td align=right><sub>20810</sub></td>
        <td align=right><b><sub>131</sub></b></td>
        <td align=right><b><sub>794</sub></b></td>
    </tr>
    <tr>
        <td><sub>jquery</sub></td>
        <td align=right><sub>31.3</sub></td>
        <td align=right><sub>548</sub></td>
        <td align=right><sub>798</sub></td>
        <td align=right><sub>692</sub></td>
        <td align=right><sub>690</sub></td>
        <td align=right><sub>642</sub></td>
        <td align=right><sub>646</sub></td>
        <td align=right><sub>677</sub></td>
        <td align=right><sub>1112</sub></td>
        <td align=right><sub>856</sub></td>
        <td align=right><sub>5553</sub></td>
        <td align=right><b><sub>84</sub></b></td>
        <td align=right><b><sub>530</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>lit-html</sub></td>
        <td align=right><sub>17.3</sub></td>
        <td align=right><sub>1117</sub></td>
        <td align=right><sub>439</sub></td>
        <td align=right><sub>406</sub></td>
        <td align=right><sub>409</sub></td>
        <td align=right><sub>408</sub></td>
        <td align=right><sub>415</sub></td>
        <td align=right><sub>439</sub></td>
        <td align=right><sub>800</sub></td>
        <td align=right><sub>554</sub></td>
        <td align=right><sub>5027</sub></td>
        <td align=right><b><sub>79</sub></b></td>
        <td align=right><b><sub>378</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>knockout</sub></td>
        <td align=right><sub>24.8</sub></td>
        <td align=right><sub>1815</sub></td>
        <td align=right><sub>89</sub></td>
        <td align=right><sub>64</sub></td>
        <td align=right><sub>-failed-</sub></td>
        <td align=right><sub>116</sub></td>
        <td align=right><sub>-failed-</sub></td>
        <td align=right><sub>129</sub></td>
        <td align=right><sub>320</sub></td>
        <td align=right><sub>191</sub></td>
        <td align=right><sub>1056</sub></td>
        <td align=right><b><sub>57</sub></b></td>
        <td align=right><b><sub>196</sub></b></td>
    </tr>
    <tr></tr>
    <tr>
        <td><sub>ractive</sub></td>
        <td align=right><sub>68.2</sub></td>
        <td align=right><sub>4758</sub></td>
        <td align=right><sub>148</sub></td>
        <td align=right><sub>145</sub></td>
        <td align=right><sub>145</sub></td>
        <td align=right><sub>138</sub></td>
        <td align=right><sub>139</sub></td>
        <td align=right><sub>150</sub></td>
        <td align=right><sub>243</sub></td>
        <td align=right><sub>187</sub></td>
        <td align=right><sub>1434</sub></td>
        <td align=right><b><sub>33</sub></b></td>
        <td align=right><b><sub>146</sub></b></td>
    </tr>	
</table>

#### Test goal
This stress test focuses a real life use case, where new data is coming from a source to be rendered through a template (e.g. from a server or by creation during runtime). The different to other benchmark implementations is, that the given task is not known before the data was available.

This test measures the raw rendering performance. If you look for a benchmark which covers more aspects goto here:<br>
https://krausest.github.io/js-framework-benchmark/current.html

#### Angular and React?

There are some reasons why you did not find Angular or React on this list. Both aren't a library nor a framework, they are full integrated ecosystems which is quite unfair to compare. Also they runs completely async. If there was a way to force running them in sync I'm pretty sure, they would fill the bottom lines of this benchmark test.

#### Local Installation

Go to the folder _bench/_ and install dependencies:
```cmd
npm install
```

Start local webserver:
```cmd
npm run server
```

Go to the URL which displays in the console, e.g. _http://localhost_. The tests will start automatically. Results may differ through various browsers and OS.

#### Score
The score is calculated in relation to the median value of each test. That will keeping the benchmark factor between each library effectively but also vary relationally when new libraries were added.

<code>Score = Sum<sub>test</sub>(lib_ops / median_ops) / test_count * 1000</code>

The file size and memory gets less relevance by applying the square root of these values.

#### Index
The score index is a very stable representation where each score points to a specific place in a ranking table. The maximum possible score and also the best place is 1000, that requires a library to be best in each category (regardless of how much better the factor is, that's the difference to the score value).

<code>Index = Sum<sub>test</sub>(lib_ops / max_ops) / test_count * 1000</code>

The file size and memory gets less relevance by applying the square root of these values.

## Tests
<table>
    <tr></tr>
    <tr>
        <td>Test</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>KB</td>
        <td>The size of the library. This value has less relevance to the score calculation (uses square root).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>RAM</td>
        <td>The amount of memory which was allocated through the whole test (memory per cycle). This value also has less relevance to the score calculation (uses square root).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Create</td>
        <td>The creation of 100 elements from blank.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Replace</td>
        <td>The replacement of 100 new elements over 100 existing elements.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Update</td>
        <td>Update content fields (order of items stay unchanged).</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Arrange</td>
        <td>Test re-arrangement, all contents stay unchanged. Toggles between:<br>1. swap second and fore-last item<br>2. re-arrange (4 shifted groups)<br>3. shuffle (on every 5th loop)</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Repaint</td>
        <td>Render same items in the same order.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Remove</td>
        <td>The remove of 50 items from a list of 100.</td>
    </tr>
    <tr></tr>
    <tr>
        <td>Append</td>
        <td>Append 50 new items to a list of 50 existing.</td>
    </tr>   
    <tr></tr>
    <tr>
        <td>Toggle</td>
        <td>Toggles between "Remove" and "Append" (test for optimizations like: pagination, content folding, list resizing).</td>
    </tr>  
    <tr></tr>
    <tr>
        <td>Clear</td>
        <td>Remove all items from a list of 100 existing.</td>
    </tr>  
</table>

<a name="details"></a>
## How this benchmark work

Basically each framework provide one public method, which handles and render the incoming data, e.g.:

```js
suite["domc"] = function(items){
    scope.items = items;
    root.update(scope);
};
```

or

```js
suite["sinuous"] = function(items){
    data(items);
};
```

The data is unknown, the library does not know if data was added, removed, updated or stay unchanged before it gets the data. That's the main different to other benchmark implementations, where a programmer can iteratively solve a problem to a known task.

Regardless the function is doing, every test has to run through the same logic.

#### Random item factory

The items were created by a random factory. The items comes from a pre-filled pool (5 slots a 100 items), so that keyed libraries get a chance to match same IDs.

Also the items has some fields, which aren't included by the template. That is also important, because in this situation is the most common. Most other benchmarks just provide data which is consumed by the template.

#### Mimic data from a server or created during runtime

The items will be cloned before every test to mimic a fresh fetch from the server or the creation of new items during runtime. The "data-driven" mode disables cloning and perform changes over and over through the same data.

#### Dedicated sandbox

Each test suite runs in its own dedicated sandbox through an iframe. This is reducing noise from externals to a minimum.

#### Hidden render target

You may see benchmarks which draws the rendering visible to the users screen. It depends on what is the desired part to benchmark. This benchmark will just cover the raw time of applied re-calculations (creation/updating/removing of elements), the time the browser takes to make them visible is:

1. no part of this test
2. not relevant, because this time is almost not influenced by the library
3. introduce unnecessary distortion to the test

#### About requirements for tested libraries
1. Each library should provide at least its own features to change DOM. A test implementation should not force to implement something like `node.nodeValue = "..."` or `node.className = "..."` by hand.
The goal is to benchmark library performance and not the performance made by an implementation of a developer. That is probably the biggest different to other benchmark tests.

2. Also asynchronous/scheduled rendering is not allowed.

3. The keyed test requires a largely non-reusing paradigm. When a new item comes from the outside, the library does not reusing nodes (on different keys/IDs).

#### About the test environment

This test also covers runtime optimizations of each library which is very important to produce meaningful results.

#### About median values
Using the median value is very common to normalize the spread in results in a statistically manner. But using the median as benchmark samples, especially when code runs through a VM, the risk is high that the median value is getting back a false result. One thing that is often overseen is the run of the garbage collector, which has a significantly cost and runs randomly. A benchmark which is based on median results will effectively cut out the garbage collector and may produce wrong results. A benchmark based on a best run will absolutely cut off the garbage collector.

This test implementation just using a median to map the results into a normalized scoring index. The results are based on the full computation time including the full run of the garbage collector. That also comes closest to a real environment.

#### About benchmark precision
It is not possible to provide absolute stable browser measuring. There are so many factors which has an impact of benchmarking that it makes no sense in trying to make "synthetic" fixes on things they cannot been fixed. Also every synthetic change may lead into wrong results and false interpreting. For my personal view the best benchmark just uses the browser without any cosmetics. That comes closest to the environment of an user who is using an application.
