
exports = module.exports = function(file, hot){
    if(typeof window=="undefined"){
        if(hot){
            delete require.cache[require.resolve(file)]
        }
        return require(file)
    }else{
        return require(file)
    }
}