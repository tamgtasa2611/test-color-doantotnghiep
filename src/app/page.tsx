"use client";

import {
  CustomerServiceOutlined,
  CommentOutlined,
  SmileOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FrownOutlined,
  MehOutlined,
  UploadOutlined,
  UserOutlined,
  EditOutlined,
  EllipsisOutlined,
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  AppleOutlined,
  AndroidOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  ConfigProvider,
  Skeleton,
  Button,
  Flex,
  FloatButton,
  Space,
  MenuProps,
  DatePicker,
  Pagination,
  Steps,
  Menu,
  GetProp,
  Divider,
  Switch,
  Checkbox,
  ColorPicker,
  Select,
  Input,
  Form,
  InputNumber,
  Radio,
  Rate,
  Slider,
  TimePicker,
  TreeSelect,
  UploadProps,
  message,
  Upload,
  Avatar,
  Badge,
  Calendar,
  Card,
  Empty,
  Image,
  List,
  QRCode,
  Statistic,
  Table,
  TableProps,
  Tag,
  Tabs,
  Timeline,
  Tooltip,
  Popover,
  notification,
  Progress,
  Result,
  Modal,
  Popconfirm,
  Spin,
  Watermark,
} from "antd";
import { useState } from "react";
import { Typography } from "antd";
import dayjs from "dayjs";
import Meta from "antd/es/card/Meta";
import React from "react";

const { Title, Text, Link } = Typography;
const { RangePicker } = DatePicker;

const { Option } = Select;

type MenuTheme = GetProp<MenuProps, "theme">;

type MenuItem = Required<MenuProps>["items"][number];

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface TableDataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<TableDataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const tableData: TableDataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const props: UploadProps = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

type NotificationType = "success" | "info" | "warning" | "error";

const items: MenuItem[] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: (
      <a href="" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1",
          },
          {
            value: "leaf2",
            title: "leaf2",
          },
          {
            value: "leaf3",
            title: "leaf3",
          },
          {
            value: "leaf4",
            title: "leaf4",
          },
          {
            value: "leaf5",
            title: "leaf5",
          },
          {
            value: "leaf6",
            title: "leaf6",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf11",
            title: <b style={{ color: "#08c" }}>leaf11</b>,
          },
        ],
      },
    ],
  },
];

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const src = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";

// you can download flipped and rotated image
// https://codesandbox.io/s/zi-ding-yi-gong-ju-lan-antd-5-7-0-forked-c9jvmp
const onDownload = (imgUrl: string) => {
  fetch(imgUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(new Blob([blob]));
      const link = document.createElement<"a">("a");
      link.href = url;
      link.download = "image.png";
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
      link.remove();
    });
};

export default function Home() {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");
  const [collapsed, setCollapsed] = useState(false);
  const [form] = Form.useForm();
  const [myColor, setMyColor] = useState("#1890ff");

  const [text, setText] = React.useState("https://ant.design/");

  const [api, contextHolder] = notification.useNotification();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const [loading, setLoading] = useState<boolean>(true);

  const [current, setCurrent] = useState("mail");

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const projects = [
    {
      id: 1,
      user: "Nguyen Tam",
      likes: 48,
      image: "/images/a.jpg",
    },
    {
      id: 10,
      user: "Nguyen Duc Tam",
      likes: 512,
      image: "/images/c.jpg",
    },
    {
      id: 100,
      user: "Nguyen Duc Tam",
      likes: 512,
      image: "/images/c.jpg",
    },
  ];

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const colors = ["#fb6f92", "#ff8080", "#6499E9 ", "#1d6fc9", "#212427", "#36454F"];

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            //pink: #fb6f92
            //sakura: #ff8080
            //blue: #6499E9 #1d6fc9
            //black: #212427
            //coal: #36454F
            colorPrimary: myColor,
          },
        }}
      >
        <Skeleton loading={loading} active className="p-8">
          <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <Row gutter={[16, 16]}>
              {projects.map((project) => (
                <Col span={6} key={project.id}></Col>
              ))}
              <Col span={24}>
                <Flex wrap gap={"large"} justify="space-between" align="center" vertical>
                  <Flex gap="large">
                    <Button
                      onClick={() => {
                        setMyColor(colors[(colors.length * Math.random()) | 0]);
                      }}
                    >
                      {myColor}
                    </Button>
                  </Flex>
                  <Flex gap="large" wrap>
                    <Button type="primary" size="small">
                      Primary Button
                    </Button>
                    <Button type="primary">Primary Button</Button>
                    <Button type="primary" shape="round">
                      Primary Button
                    </Button>
                    <Button type="primary" size="large">
                      Primary Button
                    </Button>
                    <Button type="primary" size="large" shape="round">
                      Primary Button
                    </Button>

                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                  </Flex>
                  <FloatButton.Group
                    trigger="click"
                    type="primary"
                    style={{ insetInlineEnd: 24 }}
                    icon={<CustomerServiceOutlined />}
                  >
                    <FloatButton />
                    <FloatButton icon={<CommentOutlined />} />
                  </FloatButton.Group>
                  <Pagination defaultCurrent={6} total={500} />;
                  <Steps
                    current={1}
                    items={[
                      {
                        title: "Finished",
                        description: "abc",
                      },
                      {
                        title: "In Progress",
                        description: "abc",
                        subTitle: "Left 00:00:08",
                      },
                      {
                        title: "Waiting",
                        description: "abc",
                      },
                    ]}
                  />
                  <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                  />{" "}
                  <div style={{ width: 256 }}>
                    <Switch onChange={changeMode} /> Change Mode
                    <Divider type="vertical" />
                    <Switch onChange={changeTheme} /> Change Style
                    <br />
                    <br />
                    <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                      style={{ width: 256 }}
                      defaultSelectedKeys={["1"]}
                      defaultOpenKeys={["sub1"]}
                      mode={mode}
                      theme={theme}
                      items={items}
                      inlineCollapsed={collapsed}
                    />
                  </div>
                  <Checkbox>Checkbox</Checkbox>
                  <Radio>Radio</Radio>
                  <ColorPicker allowClear showText mode={["single", "gradient"]} />
                  <RangePicker showTime />
                  <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                  >
                    <Form.Item<FieldType>
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: "Please input your username!" }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: "Please input your password!" }]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ offset: 8, span: 16 }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                  <Form form={form} name="control-hooks" style={{ maxWidth: 600 }}>
                    <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                      <Input />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                      <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                      >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      noStyle
                      shouldUpdate={(prevValues, currentValues) =>
                        prevValues.gender !== currentValues.gender
                      }
                    >
                      {({ getFieldValue }) =>
                        getFieldValue("gender") === "other" ? (
                          <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>
                        ) : null
                      }
                    </Form.Item>
                    <Form.Item>
                      <Space>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                          Reset
                        </Button>
                        <Button type="link" htmlType="button" onClick={onFill}>
                          Fill form
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                  <Input.OTP formatter={(str) => str.toUpperCase()} />
                  <InputNumber min={1} max={10} defaultValue={3} />
                  <Rate />
                  <Rate allowHalf />
                  <Rate
                    defaultValue={3}
                    character={({ index = 0 }) => {
                      const customIcons: Record<number, React.ReactNode> = {
                        1: <FrownOutlined />,
                        2: <FrownOutlined />,
                        3: <MehOutlined />,
                        4: <SmileOutlined />,
                        5: <SmileOutlined />,
                      };
                      return customIcons[index + 1];
                    }}
                  />
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                  <Slider defaultValue={30} />
                  <Slider range defaultValue={[20, 50]} />
                  <TimePicker defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")} />
                  <TreeSelect
                    showSearch
                    style={{ width: "100%" }}
                    dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    treeData={treeData}
                  />
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  <Avatar icon={<UserOutlined />} />
                  <Badge count={5}>
                    <Avatar shape="square" size="large" />
                  </Badge>
                  <Calendar />
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <Image width={200} height={200} alt="example" src="/public/images/a.jpg" />
                    }
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Meta
                      avatar={<Avatar src="/public/images/avt.jpg" />}
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
                  <Empty />
                  <Image
                    alt="example"
                    width={200}
                    src={src}
                    preview={{
                      toolbarRender: (
                        _,
                        {
                          image: { url },
                          transform: { scale },
                          actions: {
                            onFlipY,
                            onFlipX,
                            onRotateLeft,
                            onRotateRight,
                            onZoomOut,
                            onZoomIn,
                            onReset,
                          },
                        }
                      ) => (
                        <Space size={12} className="toolbar-wrapper">
                          <DownloadOutlined onClick={() => onDownload(url)} />
                          <SwapOutlined rotate={90} onClick={onFlipY} />
                          <SwapOutlined onClick={onFlipX} />
                          <RotateLeftOutlined onClick={onRotateLeft} />
                          <RotateRightOutlined onClick={onRotateRight} />
                          <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                          <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                          <UndoOutlined onClick={onReset} />
                        </Space>
                      ),
                    }}
                  />
                  <List
                    style={{ width: "100%" }}
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                  <Space direction="vertical" align="center">
                    <QRCode value={text || "-"} />
                    <Input
                      placeholder="-"
                      maxLength={60}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </Space>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Card bordered={false}>
                        <Statistic
                          title="Active"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: "#3f8600" }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card bordered={false}>
                        <Statistic
                          title="Idle"
                          value={9.3}
                          precision={2}
                          valueStyle={{ color: "#cf1322" }}
                          prefix={<ArrowDownOutlined />}
                          suffix="%"
                        />
                      </Card>
                    </Col>
                  </Row>
                  <Table columns={columns} dataSource={tableData} />
                  <Tabs
                    defaultActiveKey="2"
                    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
                      const id = String(i + 1);
                      return {
                        key: id,
                        label: `Tab ${id}`,
                        children: `Tab ${id}`,
                        icon: <Icon />,
                      };
                    })}
                  />
                  <div>
                    <Divider orientation="left">Presets</Divider>
                    <Flex gap="4px 0" wrap>
                      <Tag color="magenta">magenta</Tag>
                      <Tag color="red">red</Tag>
                      <Tag color="volcano">volcano</Tag>
                      <Tag color="orange">orange</Tag>
                      <Tag color="gold">gold</Tag>
                      <Tag color="lime">lime</Tag>
                      <Tag color="green">green</Tag>
                      <Tag color="cyan">cyan</Tag>
                      <Tag color="blue">blue</Tag>
                      <Tag color="geekblue">geekblue</Tag>
                      <Tag color="purple">purple</Tag>
                    </Flex>
                    <Divider orientation="left">Custom</Divider>
                    <Flex gap="4px 0" wrap>
                      <Tag color="#f50">#f50</Tag>
                      <Tag color="#2db7f5">#2db7f5</Tag>
                      <Tag color="#87d068">#87d068</Tag>
                      <Tag color="#108ee9">#108ee9</Tag>
                    </Flex>
                  </div>
                  <Timeline
                    items={[
                      {
                        color: "green",
                        children: "Create a services site 2015-09-01",
                      },
                      {
                        color: "green",
                        children: "Create a services site 2015-09-01",
                      },
                      {
                        color: "red",
                        children: (
                          <>
                            <p>Solve initial network problems 1</p>
                            <p>Solve initial network problems 2</p>
                            <p>Solve initial network problems 3 2015-09-01</p>
                          </>
                        ),
                      },
                      {
                        children: (
                          <>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                          </>
                        ),
                      },
                      {
                        color: "gray",
                        children: (
                          <>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                          </>
                        ),
                      },
                      {
                        color: "gray",
                        children: (
                          <>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                          </>
                        ),
                      },
                      {
                        color: "#00CCFF",
                        dot: <SmileOutlined />,
                        children: <p>Custom color testing</p>,
                      },
                    ]}
                  />
                  <Tooltip title="prompt text">
                    <span>Tooltip will show on mouse enter.</span>
                  </Tooltip>
                  <Popover
                    content={
                      <div>
                        <p>Content</p>
                        <p>Content</p>
                      </div>
                    }
                    title="Title"
                  >
                    <Button type="primary">Hover me</Button>
                  </Popover>
                  <div>
                    {contextHolder}
                    <Space>
                      <Button onClick={() => openNotificationWithIcon("success")}>Success</Button>
                      <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
                      <Button onClick={() => openNotificationWithIcon("warning")}>Warning</Button>
                      <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
                    </Space>
                  </div>
                  <Flex gap="small" vertical>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                    <Progress
                      percent={50}
                      status="active"
                      strokeColor={{ from: "#108ee9", to: "#87d068" }}
                    />
                    <Flex>
                      <Progress type="circle" percent={75} />
                      <Progress type="circle" percent={70} status="exception" />
                      <Progress type="circle" percent={100} />
                    </Flex>
                  </Flex>
                  <Result
                    status="success"
                    title="Successfully Purchased Cloud Server ECS!"
                    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                    extra={[
                      <Button type="primary" key="console">
                        Go Console
                      </Button>,
                      <Button key="buy">Buy Again</Button>,
                    ]}
                  />
                  <div>
                    <Button type="primary" onClick={showModal}>
                      Open Modal
                    </Button>
                    <Modal
                      title="Basic Modal"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </Modal>
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button danger>Delete</Button>
                    </Popconfirm>
                  </div>
                  <Flex gap="large">
                    <Spin />
                    <Spin tip="Loading" size="small">
                      Loading
                    </Spin>
                    <Spin indicator={<LoadingOutlined spin />} />
                  </Flex>
                  <Watermark content="Ant Design">
                    <div style={{ height: 300 }} />
                  </Watermark>
                </Flex>
              </Col>
            </Row>
          </main>
        </Skeleton>
      </ConfigProvider>
    </>
  );
}
