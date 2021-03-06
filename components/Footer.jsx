import React from 'react'
import {
  Icon,
  Link
} from './'

const classes = {
  root: 'Bgc(#000.4) D(f) Jc(c) Ai(c) Py(rh) Fz(msn1)',
  link: 'C(#fff) Mx(rq) Mx(rh)--land Whs(nw) Op(.6) Op(1):h D(if) Ai(c)',
  linkText: 'Mstart(rq) D(n) D(i)--md'
}

const Nav = ({
  rotation,
  className
}) => {
  return (
    <div className={classes.root}>
      <Link to='/code-of-conduct/' className={classes.link}>
        Code of Conduct
      </Link>
      <Link href='http://twitter.com/campjsnews' className={classes.link}>
        <Icon name='twitter' /><span className={classes.linkText}>Twitter</span>
      </Link>
      <Link href='http://github.com/campjs' className={classes.link}>
        <Icon name='github' /><span className={classes.linkText}>Github</span>
      </Link>
    </div>
  )
}

export default Nav
