package com.meltwater.fawn.s3

import cats.implicits._
import com.lucidchart.open.xtract.XmlReader._
import com.lucidchart.open.xtract.{__, XmlReader}
import org.http4s.Headers

case class Bucket(creationDate: String, name: String)

object Bucket {
  implicit val xmlDecoder: XmlReader[Bucket] = (
    (__ \ "CreationDate").read[String],
    (__ \ "Name").read[String]
  ).mapN(Bucket.apply)
}

case class ListAllMyBucketsResponse(
    buckets: Option[Vector[Bucket]],
    ownerName: String,
    ownerID: String)

object ListAllMyBucketsResponse {
  implicit val xmlDecoder: XmlReader[ListAllMyBucketsResponse] = (
    (__ \ "Buckets" \ "Bucket").read(seq[Bucket]).map(_.toVector).optional,
    (__ \ "Owner" \ "DisplayName").read[String],
    (__ \ "Owner" \ "ID").read[String]
  ).mapN(ListAllMyBucketsResponse.apply)
}

case class Contents(
    key: String,
    lastModified: String,
    eTag: String,
    size: Int,
    storageClass: String)

object Contents {
  implicit val xmlDecoder: XmlReader[Contents] = (
    (__ \ "Key").read[String],
    (__ \ "LastModified").read[String],
    (__ \ "ETag").read[String],
    (__ \ "Size").read[Int],
    (__ \ "StorageClass").read[String]
  ).mapN(Contents.apply)
}

case class ListBucketResponse(
    name: String,
    prefix: String,
    keyCount: Int,
    maxKeys: Int,
    isTruncated: Boolean,
    contents: Option[Vector[Contents]])

object ListBucketResponse {
  implicit val xmlDecoder: XmlReader[ListBucketResponse] = (
    (__ \ "Name").read[String],
    (__ \ "Prefix").read[String],
    (__ \ "KeyCount").read[Int],
    (__ \ "MaxKeys").read[Int],
    (__ \ "IsTruncated").read[Boolean],
    (__ \ "Contents").read(seq[Contents]).map(_.toVector).optional
  ).mapN(ListBucketResponse.apply)
}

case class UploadFileResponse(requestId: String, eTag: String, headers: Headers)

case class DownloadFileResponse[T](requestId: String, eTag: String, headers: Headers, body: T)

case class DeleteObjectResponse(requestId: String)

case class CopyObjectResponse(eTag: String, lastModified: String)

object CopyObjectResponse {
  implicit val xmlDecoder: XmlReader[CopyObjectResponse] = (
    (__ \ "ETag").read[String],
    (__ \ "LastModified").read[String]
  ).mapN(CopyObjectResponse.apply)
}

case class HeadObjectResponse(
    requestId: String,
    eTag: String,
    contentLength: Int,
    contentType: String,
    headers: Headers)

case class Grants(
    granteeName: String,
    granteeEmail: String,
    granteeId: String,
    granteeType: String,
    granteeUri: String,
    permission: String)

object Grants {
  implicit val xmlDecoder: XmlReader[Grants] = (
    (__ \ "Grantee" \ "DisplayName").read[String],
    (__ \ "Grantee" \ "EmailAddress").read[String],
    (__ \ "Grantee" \ "ID").read[String],
    (__ \ "Grantee" \ "xsi:type").read[String],
    (__ \ "Grantee" \ "URI").read[String],
    (__ \ "Permission").read[String]
  ).mapN(Grants.apply)
}

case class GetBucketAclResponse(ownerName: String, ownerId: String, grants: Option[Vector[Grants]])

object GetBucketAclResponse {
  implicit val xmlDecoder: XmlReader[GetBucketAclResponse] = (
    (__ \ "Owner" \ "DisplayName").read[String],
    (__ \ "Owner" \ "ID").read[String],
    (__ \ "AccessControlList" \ "Grant").read(seq[Grants]).map(_.toVector).optional
  ).mapN(GetBucketAclResponse.apply)
}

case class CreateMultipartUploadResponse(bucket: String, key: String, uploadId: String)

object CreateMultipartUploadResponse {
  implicit val xmlDecoder: XmlReader[CreateMultipartUploadResponse] = (
    (__ \ "Bucket").read[String],
    (__ \ "Key").read[String],
    (__ \ "UploadId").read[String]
  ).mapN(CreateMultipartUploadResponse.apply)
}

case class Uploads(
    initiated: String,
    initiatorName: String,
    initiatorId: String,
    key: String,
    ownerName: String,
    ownerId: String,
    storageClass: String,
    uploadId: String)

object Uploads {
  implicit val xmlDecoder: XmlReader[Uploads] = (
    (__ \ "Initiated").read[String],
    (__ \ "Initiator" \ "DisplayName").read[String],
    (__ \ "Initiator" \ "ID").read[String],
    (__ \ "Key").read[String],
    (__ \ "Owner" \ "DisplayName").read[String],
    (__ \ "Owner" \ "ID").read[String],
    (__ \ "StorageClass").read[String],
    (__ \ "UploadId").read[String]
  ).mapN(Uploads.apply)
}

case class CommonPrefixes(prefix: String)

object CommonPrefixes {
  implicit val xmlDecoder: XmlReader[CommonPrefixes] =
    (__ \ "Prefix").read[String].map(CommonPrefixes.apply)
}

case class ListMultipartUploadsResponse(
    bucket: String,
    keyMarker: Option[String],
    uploadIdMarker: Option[String],
    nextKeyMarker: Option[String],
    prefix: Option[String],
    delimiter: Option[String],
    nextUploadIdMarker: String,
    maxUploads: Int,
    isTruncated: Boolean,
    uploads: Option[Vector[Uploads]],
    commonPrefixes: Option[Vector[CommonPrefixes]])

object ListMultipartUploadsResponse {
  implicit val xmlDecoder: XmlReader[ListMultipartUploadsResponse] = (
    (__ \ "Bucket").read[String],
    (__ \ "KeyMarker").read[String].optional,
    (__ \ "UploadIdMarker").read[String].optional,
    (__ \ "NextKeyMarker").read[String].optional,
    (__ \ "Prefix").read[String].optional,
    (__ \ "Delimiter").read[String].optional,
    (__ \ "NextUploadIdMarker").read[String],
    (__ \ "MaxUploads").read[Int],
    (__ \ "IsTruncated").read[Boolean],
    (__ \ "Upload").read(seq[Uploads]).map(_.toVector).optional,
    (__ \ "CommonPrefixes").read(seq[CommonPrefixes]).map(_.toVector).optional
  ).mapN(ListMultipartUploadsResponse.apply)
}

case class Parts(eTag: String, lastModified: String, partNumber: Int, size: Int)

object Parts {
  implicit val xmlDecoder: XmlReader[Parts] = (
    (__ \ "ETag").read[String],
    (__ \ "LastModified").read[String],
    (__ \ "PartNumber").read[Int],
    (__ \ "Size").read[Int]
  ).mapN(Parts.apply)
}

case class ListPartsResponse(
    bucket: String,
    key: String,
    uploadId: String,
    partNumberMarker: Option[Int],
    nextPartNumberMarker: Option[Int],
    maxParts: Option[Int],
    isTruncated: Boolean,
    parts: Option[Vector[Parts]],
    initiatorName: String,
    initiatorId: String,
    ownerName: String,
    ownerId: String,
    storageClass: String
)

object ListPartsResponse {
  implicit val xmlDecoder: XmlReader[ListPartsResponse] = (
    (__ \ "Bucket").read[String],
    (__ \ "Key").read[String],
    (__ \ "UploadId").read[String],
    (__ \ "PartNumberMarker").read[Int].optional,
    (__ \ "NextPartNumberMarker").read[Int].optional,
    (__ \ "MaxParts").read[Int].optional,
    (__ \ "IsTruncated").read[Boolean],
    (__ \ "Part").read(seq[Parts]).map(_.toVector).optional,
    (__ \ "Initiator" \ "DisplayName").read[String],
    (__ \ "Initiator" \ "ID").read[String],
    (__ \ "Owner" \ "DisplayName").read[String],
    (__ \ "Owner" \ "ID").read[String],
    (__ \ "StorageClass").read[String]
  ).mapN(ListPartsResponse.apply)
}

case class AbortMultipartUploadResponse(requestId: String)

case class UploadPartResponse(requestId: String, eTag: String, headers: Headers)

case class CompleteMultipartUploadResponse(
    location: String,
    bucket: String,
    key: String,
    eTag: String)

object CompleteMultipartUploadResponse {
  implicit val xmlDecoder: XmlReader[CompleteMultipartUploadResponse] = (
    (__ \ "Location").read[String],
    (__ \ "Bucket").read[String],
    (__ \ "Key").read[String],
    (__ \ "ETag").read[String]
  ).mapN(CompleteMultipartUploadResponse.apply)
}
