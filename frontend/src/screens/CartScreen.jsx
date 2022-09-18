import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { useParams, useLocation } from 'react-router-dom'
import { addToCart } from './../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()
  const location = useLocation()
  //   const navigate = useNavigate()

  const productId = id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])
  return <div>Cart</div>
}

export default CartScreen
