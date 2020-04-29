import React from 'react';
import { SearchboxWrapper } from './SearchStyle'
import Input from './../InputFiled/Input';
function Searchbox({ heroSearch }) {
    return (
        <>
            {!heroSearch ? <SearchboxWrapper >
                <form onSubmit={(e) => e.preventDefault()}>
                    <i className="fas fa-search"></i>
                    <Input heroSearch={heroSearch ? 'true' : 'false'} />
                </form>
            </SearchboxWrapper> :
                <SearchboxWrapper heroSearch='true' >
                    <form onSubmit={(e) => e.preventDefault()}>
                        <i className="fas fa-search"></i>
                        <Input heroSearch='true' />
                    </form>
                </SearchboxWrapper>}
        </>
    )
}

export default Searchbox
