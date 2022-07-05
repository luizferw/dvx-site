import AdsItem from '../AdsItem'
import { useState, useEffect } from 'react'
import {
  PremiumGalleryStyle,
  PremiumItems
} from '../../../../assets/styles/Homepage/styleMain'

export default function PremiumGallery() {
  return (
    <PremiumGalleryStyle>
      <header>
        <ul className="list-left">
          <li>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29ucyAvIGJhZGdlLyBwcmVtaXVtPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Ik9MWC0tLU5ldyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtLS1Db21wb25lbnRlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5Ny4wMDAwMDAsIC0xMzU5LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkzLjAwMDAwMCwgMTM1OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJJY29ucy0vLWJhZGdlLy1wcmVtaXVtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic2Vsby1wcmVtaXVtIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LDEuNDQ3MjMwNzUgQzI1LDAuMzU0MjIxODg5IDI0LjYzNjQxMTcsLTMuNTUyNzEzNjhlLTE1IDIzLjQ4NzQ3MjUsLTMuNTUyNzEzNjhlLTE1IEwxLjU1NDg3MDYxLC0zLjU1MjcxMzY4ZS0xNSBDMC4zMzA4NzczMDQsLTMuNTUyNzEzNjhlLTE1IDMuMjA2MzI0MWUtMTMsMC4zMjc3NTg3ODkgLTEuODIyMDk4MDNlLTEyLDEuNDQ3MjMwNzUgTC0xLjgzMzIwMDI2ZS0xMiwyOS41MjM4MDk1IEwxMi41LDIzLjk1MDcxODUgQzEyLjQ5OTk5MiwyMy45NTA3MjMgMTYuNjY2NjU4NywyNS44MDg0MjAxIDI1LDI5LjUyMzgwOTUgTDI1LDEuNDQ3MjMwNzUgWiIgaWQ9Ik1hc2siIGZpbGw9IiMyOEI1RDkiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMjUwMDAwLCA3Ljg1NzE0MykiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMCAyLjg1NzE0Mjg2IDYuNjQwNTQyMTIgMTAuNzE0Mjg1NyAxMy4yODEyNSAyLjg1NzE0Mjg2IDYuNjQwNTQyMTIgMi44NTcxNDI4NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjEzLjI4MTI1IDIuMTQyODU3MTQgMTEuNTE2NjA0OSAwIDYuNjQwNTQyMTIgMCAxLjc2NDY0NTA5IDAgMCAyLjE0Mjg1NzE0IDYuNjQwNTQyMTIgMi4xNDI4NTcxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
          </li>
          <li>
            <h2>Premium Gallery</h2>
          </li>
        </ul>

        <ul className="list-right">
          <li>Want to sell faster?</li>
          <li>
            <a href="/announce">Place your ad here</a>
          </li>
        </ul>
      </header>
    </PremiumGalleryStyle>
  )
}
