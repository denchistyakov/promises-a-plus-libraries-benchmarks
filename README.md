promises-a-plus-libraries-benchmarks
====================================

Benchmarks for differents Promises/A+ libraries.

Results for `bluebird@1.1.0`, `Q@1.0.0`, `vow@0.3.12`, `vow@0.4.1` on my MacBook Pro 2,4 GHz Intel Core i5. Node.js@v0.10.26

```
            Bluebird
705,289 op/s » then
16,634 op/s » reject
42,713 op/s » catch
57,035 op/s » then next tick
61,929 op/s » all + then
59,288 op/s » all + spread

            Q
26,833 op/s » then
19,942 op/s » reject
 3,424 op/s » catch
17,465 op/s » then next tick
 7,651 op/s » all + then
 3,945 op/s » all + spread

            Vow 0.3.12
96,759 op/s » then
127,702 op/s » reject
25,822 op/s » catch
70,691 op/s » then next tick
35,703 op/s » all + then
30,340 op/s » all + spread

            Vow 0.4.1
68,705 op/s » then
92,821 op/s » reject
23,431 op/s » catch
53,413 op/s » then next tick
28,887 op/s » all + then
27,357 op/s » all + spread
```
