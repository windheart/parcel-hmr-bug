# parcel-hmr-bug

### Steps to reproduce

1. Run `yarn install && yarn start`
2. Open browser and go to http://localhost:3000
3. Change packages/utils/fn1 return value to something else
4. See HMR is working
5. Change packages/utils/fn2 return value to something else
6. See HMR is not working 

