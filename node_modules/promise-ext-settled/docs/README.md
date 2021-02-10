<a name="allSettled"></a>
## allSettled(promises, [onProgress]) ⇒ <code>Promise</code>
Waiting while all promises will be settled to onFulfilled or onRejected state
Returned promise will be resolved with array with info for every passed promise:
Array<{status:boolean, value:*}>

onProgress-function will be called (if passed) for every settled promise

**Kind**: global function  

| Param | Type |
| --- | --- |
| promises | <code>Array.&lt;Promise&gt;</code> | 
| [onProgress] | <code>function</code> | 

